import React from "react";
import { Image, ActivityIndicator } from "react-native";

import IllustrationPng from "../../assets/illustration.png";

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/auth";

import { Container, Content, Title, SubTitle } from "./styles";

import theme from "../../global/styles/theme";

export function SignIn() {
	const { loading, signIn } = useAuth();

	async function handleSignIn() {
		await signIn();
	}

	return (
		<Background>
			<Container>
				<Image
					source={IllustrationPng}
					style={{ width: "100%", height: 360, resizeMode: "stretch" }}
				/>

				<Content>
					<Title>
						Conecte-se{"\n"}e organize{"\n"}suas jogatinas
					</Title>

					<SubTitle>
						Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
					</SubTitle>

					{loading ? (
						<ActivityIndicator color={theme.colors.primary} />
					) : (
						<ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
					)}
				</Content>
			</Container>
		</Background>
	);
}
