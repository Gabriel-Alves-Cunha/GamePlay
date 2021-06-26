import React, { useState, useEffect } from "react";
import { Alert, ImageBackground, Share, Platform } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import bannerPng from "../../assets/banner.png";

import { Member, MemberProps } from "../../components/Member";
import { AppointmentProps } from "../../components/Appointment";
import { HeaderComponent } from "../../components/HeaderComponent";
import { ListSeparator } from "../../components/ListSeparator";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from "../../components/ListHeader";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

import {
	ImageBackgroundContent,
	SubTitle,
	Footer,
	Title,
	List,
} from "./styles";

import theme from "../../global/styles/theme";

type Params = {
	selectedGuild: AppointmentProps;
};

interface Widget {
	members?: MemberProps[];
	instant_invite?: string;
	name?: string;
	id?: string;
}

export function AppointmentDetails() {
	const route = useRoute();
	const { selectedGuild } = route.params as Params;

	const [widget, setWidget] = useState({} as Widget);
	const [isLoading, setIsLoading] = useState(true);

	function handleShareInvitation() {
		if (widget.instant_invite) {
			const message =
				Platform.OS === "ios"
					? `Junte-se à ${selectedGuild.guild.name}`
					: widget.instant_invite;

			Share.share({
				message,
				url: widget.instant_invite,
			});
		}
	}

	function handleOpenGuild() {
		Linking.openURL(widget.instant_invite!);
	}

	async function fetchGuildWidget() {
		setIsLoading(true);

		try {
			const res = await api.get(
				`/guilds/${selectedGuild.guild.id}/widget.json`
			);

			console.log(res);

			setWidget(res.data);
		} catch (error) {
			console.error(error);
			Alert.alert(
				"Erro",
				"Ocorreu um erro ao recuperar as informações do servidor! Verifique se, nas configurações do servidor, o Widget está habilitado."
			);
		}

		setIsLoading(false);
	}

	useEffect(() => {
		fetchGuildWidget();
	}, []);

	return (
		<Background>
			<HeaderComponent
				title="Detalhes"
				action={
					selectedGuild.guild.owner && (
						<BorderlessButton onPress={handleShareInvitation}>
							<Fontisto name="share" size={24} color={theme.colors.primary} />
						</BorderlessButton>
					)
				}
			/>

			<ImageBackground
				style={{
					width: "100%",
					height: 234,
				}}
				source={bannerPng}
			>
				<ImageBackgroundContent>
					<Title>{selectedGuild.guild.name}</Title>
					<SubTitle>{selectedGuild.description}</SubTitle>
				</ImageBackgroundContent>
			</ImageBackground>

			{isLoading ? (
				<Loading />
			) : widget.members ? (
				<>
					<ListHeader
						title="Jogadores"
						subTitle={`Total ${widget.members.length}`}
					/>
					<List
						ItemSeparatorComponent={() => <ListSeparator isCentered />}
						renderItem={({ item }) => <Member data={item} />}
						keyExtractor={(item) => item.id}
						data={widget.members}
					/>
				</>
			) : (
				<></>
			)}

			{selectedGuild.guild.owner && (
				<Footer>
					<ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
				</Footer>
			)}
		</Background>
	);
}

// const members: MemberProps[] = [
// 	{
// 		id: "1",
// 		userName: "Gabriel",
// 		avatar_url: "https://github.com/Gabriel-Alves-Cunha.png",
// 		status: "online",
// 	},
// 	{
// 		id: "2",
// 		userName: "Gabriel",
// 		avatar_url: "https://github.com/Gabriel-Alves-Cunha.png",
// 		status: "offline",
// 	},
// 	{
// 		id: "3",
// 		userName: "Gabriel",
// 		avatar_url: "https://github.com/Gabriel-Alves-Cunha.png",
// 		status: "online",
// 	},
// ];
