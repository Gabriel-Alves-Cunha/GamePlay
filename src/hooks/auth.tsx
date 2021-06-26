import React, {
	createContext,
	ReactNode,
	useContext,
	useState,
	useEffect,
} from "react";
import { Alert } from "react-native";
import { api } from "../services/api";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_USER } from "../config/storage";

const { RESPONSE_TYPE } = process.env;
const { REDIRECT_URI } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMG } = process.env;
const { SCOPE } = process.env;

type StoragedUser = {
	userName: string;
	firstName: string;
	avatar: string;
	email: string;
	token: string;
	id: string;
};

type AuthResponse = AuthSession.AuthSessionResult & {
	params: {
		access_token?: string;
		error?: string;
	};
};

type AuthContextProps = {
	signOut(): Promise<void>;
	signIn(): Promise<void>;
	user: StoragedUser;
	loading: boolean;
};

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);
const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState({} as StoragedUser);
	const [loading, setLoading] = useState(false);

	async function signIn() {
		setLoading(true);

		try {
			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthResponse;

			if (type === "success" && !params.error) {
				api.defaults.headers.authorization = `Bearer ${params.access_token}`;

				const userInfo = await api.get("/users/@me");
				const firstName = userInfo.data.username.split(" ")[0];
				userInfo.data.avatar = `${CDN_IMG}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

				const userData: StoragedUser = {
					...userInfo.data,
					firstName,
					token: params.access_token,
				};

				await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

				setUser(userData);
			} else {
				console.error("Não foi possível logar! type = " + type);
			}
		} catch (error) {
			console.error(error);
			Alert.alert(
				"Problema",
				"Houve um problema ao conectar com o servidor :("
			);
		}

		setLoading(false);
	}

	async function signOut() {
		console.log("Signing out!");

		setUser({} as StoragedUser);

		await AsyncStorage.removeItem(COLLECTION_USER);
	}

	async function loadStoragedUserData() {
		const storagedData = await AsyncStorage.getItem(COLLECTION_USER);
		console.log("COLLECTION_USER =", COLLECTION_USER);
		console.log("storagedData =", storagedData);

		if (storagedData) {
			const userData = JSON.parse(storagedData) as StoragedUser;

			api.defaults.headers.authorization = `Bearer ${userData.token}`;

			setUser(userData);
		}
	}

	useEffect(() => {
		loadStoragedUserData();
	}, []);

	return (
		<AuthContext.Provider value={{ loading, user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const ctx = useContext(AuthContext);
	return ctx;
}

export { useAuth, AuthProvider };
