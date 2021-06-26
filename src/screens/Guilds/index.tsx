import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import { ListSeparator } from "../../components/ListSeparator";
import { GuildProps } from "../../components/Appointment";
import { Loading } from "../../components/Loading";
import { Guild } from "../../components/Guild";
import { api } from "../../services/api";

import { Container, List } from "./styles";

type Props = {
	handleSelectedGuild(guild: GuildProps): void;
};

export function Guilds({ handleSelectedGuild }: Props) {
	const [guilds, setGuilds] = useState([] as GuildProps[]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchGuilds() {
		setIsLoading(true);

		try {
			const res = await api.get("/users/@me/guilds");
			setGuilds(res.data);
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Ocorreu um erro ao pegar os servidores.");
		}

		setIsLoading(false);
	}

	useEffect(() => {
		fetchGuilds();
	}, []);

	return (
		<Container>
			{isLoading ? (
				<Loading />
			) : (
				<List
					renderItem={({ item }) => (
						<Guild data={item} onPress={() => handleSelectedGuild(item)} />
					)}
					contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
					ItemSeparatorComponent={() => <ListSeparator isCentered />}
					ListHeaderComponent={() => <ListSeparator isCentered />}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					data={guilds}
				/>
			)}
		</Container>
	);
}

// const guilds: GuildProps[] = [
// 	{
// 		id: "2",
// 		name: "Lendários",
// 		owner: true,
// 		icon: null,
// 	},
// 	{
// 		id: "3",
// 		name: "Galera do game",
// 		owner: true,
// 		icon: "f",
// 	},
// 	{
// 		id: "4",
// 		name: "Doidões",
// 		owner: true,
// 		icon: "a",
// 	},
// 	{
// 		id: "5",
// 		name: "Galera do game",
// 		owner: true,
// 		icon: "f",
// 	},
// 	{
// 		id: "6",
// 		name: "Doidões",
// 		owner: true,
// 		icon: "a",
// 	},
// 	{
// 		id: "7",
// 		name: "Galera do game",
// 		owner: true,
// 		icon: "f",
// 	},
// 	{
// 		id: "8",
// 		name: "Doidões",
// 		owner: true,
// 		icon: "a",
// 	},
// ];
