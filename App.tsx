import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import {
	Rajdhani_500Medium,
	Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import { AuthProvider } from "./src/hooks/auth";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

import theme from "./src/global/styles/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		Rajdhani_500Medium,
		Rajdhani_700Bold,
		Inter_400Regular,
		Inter_500Medium,
	});

	if (!fontsLoaded) {
		console.log("Loading fonts!");

		return <AppLoading />;
	}

	return (
		<Background>
			<ThemeProvider theme={theme}>
				<StatusBar
					backgroundColor="transparent"
					barStyle="light-content"
					translucent
				/>

				<AuthProvider>
					<Routes />
				</AuthProvider>
			</ThemeProvider>
		</Background>
	);
}
