import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { COLLECTION_APPOINTMENTS } from "../../config/storage";
import { CategorySelect } from "../../components/CategorySelect";
import { ListSeparator } from "../../components/ListSeparator";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Loading } from "../../components/Loading";
import { Profile } from "../../components/Profile";

import { Header, List } from "./styles";

export function Home() {
	const nav = useNavigation();

	const [appointments, setAppointments] = useState([] as AppointmentProps[]);
	const [isLoading, setIsLoading] = useState(true);
	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	function handleAppointmentDetails(selectedGuild: AppointmentProps) {
		nav.navigate("AppointmentDetails", { selectedGuild });
	}

	function handleCreateAppointment() {
		nav.navigate("CreateAppointment");
	}

	async function loadAppointments() {
		setIsLoading(true);

		const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
		const storageResponse: AppointmentProps[] = storage
			? JSON.parse(storage)
			: [];
		console.log("[STORAGE_RESPONSE]:", storageResponse);

		if (category) {
			console.log("Categoria:", category);

			setAppointments(
				storageResponse.filter((item) => item.category === category)
			);
		} else {
			setAppointments(storageResponse);
		}

		setIsLoading(false);
	}

	useFocusEffect(
		useCallback(() => {
			loadAppointments();
		}, [category])
	);

	return (
		<Background>
			<Header>
				<Profile />
				<ButtonAdd onPress={handleCreateAppointment} />
			</Header>

			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>

			{isLoading ? (
				<Loading />
			) : (
				<>
					<ListHeader
						title="Partidas agendadas"
						subTitle={`Total ${appointments.length}`}
					/>
					<List
						renderItem={({ item }) => (
							<Appointment
								data={item}
								onPress={() => handleAppointmentDetails(item)}
							/>
						)}
						contentContainerStyle={{ paddingBottom: 69 }}
						showsHorizontalScrollIndicator={false}
						ItemSeparatorComponent={ListSeparator}
						keyExtractor={(item) => item.id}
						data={appointments}
					/>
				</>
			)}
		</Background>
	);
}

// const appointments: AppointmentProps[] = [
// 	{
// 		id: "1",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// 	{
// 		id: "2",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// 	{
// 		id: "3",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// 	{
// 		id: "4",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// 	{
// 		id: "5",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// 	{
// 		id: "6",
// 		guild: {
// 			id: "1",
// 			name: "Lendários",
// 			icon: null,
// 			owner: true,
// 		},
// 		category: "1",
// 		date: "22/06/2021 às 20:04h",
// 		description:
// 			"É hoje que vamos chegar ao challenger sem perder uma partida da md10",
// 	},
// ];
