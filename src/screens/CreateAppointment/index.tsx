import React, { useState } from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { AppointmentProps, GuildProps } from "../../components/Appointment";
import { COLLECTION_APPOINTMENTS } from "../../config/storage";
import { HeaderComponent } from "../../components/HeaderComponent";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { SmallInput } from "../../components/SmallInput";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";

import {
	FieldContainer,
	SelectBody,
	CharLimit,
	Divider,
	Column,
	Footer,
	Select,
	Field,
	Label,
	NoImg,
	Form,
} from "./styles";

import theme from "../../global/styles/theme";

export function CreateAppointment() {
	const nav = useNavigation();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [guild, setGuild] = useState({} as GuildProps);
	const [category, setCategory] = useState("");

	const [description, setDescription] = useState("");
	const [minute, setMinute] = useState("");
	const [month, setMonth] = useState("");
	const [hour, setHour] = useState("");
	const [day, setDay] = useState("");

	function handleOpenGuildsModal() {
		setIsModalOpen((oldValue) => !oldValue);
	}

	function handleSelectedGuild(selectedGuild: GuildProps) {
		setGuild(selectedGuild);
		handleOpenGuildsModal();
	}

	function handleCategorySelect(categoryId: string) {
		setCategory(categoryId);
	}

	async function handleSave() {
		const newAppointment: AppointmentProps = {
			date: `${day}/${month} às ${hour}:${minute}h`,
			id: uuid.v4() as string,
			description,
			category,
			guild,
		};

		const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
		const appointments: AppointmentProps[] = storage ? JSON.parse(storage) : [];

		await AsyncStorage.setItem(
			COLLECTION_APPOINTMENTS,
			JSON.stringify([...appointments, newAppointment])
		);

		nav.navigate("Home");
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
		>
			<Background>
				<ScrollView>
					<HeaderComponent title="Agendar partida" />

					<Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>
						Categoria
					</Label>

					<CategorySelect
						categorySelected={category}
						setCategory={handleCategorySelect}
						hasCheckedBox
					/>

					<Form>
						<RectButton onPress={handleOpenGuildsModal}>
							<Select>
								{guild.icon ? (
									<GuildIcon guildId={guild.id} iconId={guild.icon} />
								) : (
									<NoImg />
								)}

								<SelectBody>
									<Label>
										{guild.name ? guild.name : "Selecione um servidor"}
									</Label>
								</SelectBody>

								<Feather
									color={theme.colors.heading}
									name="chevron-right"
									size={18}
								/>
							</Select>
						</RectButton>

						<Field>
							<FieldContainer>
								<Label style={{ marginBottom: 12 }}>Dia e mês</Label>

								<Column>
									<SmallInput maxLength={2} onChangeText={setDay} />
									<Divider>/</Divider>
									<SmallInput maxLength={2} onChangeText={setMonth} />
								</Column>
							</FieldContainer>

							<FieldContainer>
								<Label style={{ marginBottom: 12 }}>Hora e minuto</Label>

								<Column>
									<SmallInput maxLength={2} onChangeText={setHour} />
									<Divider>:</Divider>
									<SmallInput maxLength={2} onChangeText={setMinute} />
								</Column>
							</FieldContainer>
						</Field>

						<Field style={{ marginBottom: 12 }}>
							<Label>Descrição</Label>
							<CharLimit>Max 100 chars</CharLimit>
						</Field>

						<TextArea
							onChangeText={setDescription}
							autoCorrect={false}
							numberOfLines={5}
							maxLength={100}
							multiline
						/>
					</Form>

					<Footer>
						<Button title="Agendar" onPress={handleSave} />
					</Footer>
				</ScrollView>
			</Background>

			<ModalView
				closeModal={handleOpenGuildsModal}
				visible={isModalOpen}
				marginTop={100}
			>
				<Guilds handleSelectedGuild={handleSelectedGuild} />
			</ModalView>
		</KeyboardAvoidingView>
	);
}
