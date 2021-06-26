import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { categories } from "../../utils/categories";

import CalendarSvg from "../../assets/calendar.svg";
import PlayerSvg from "../../assets/player.svg";

import { GuildIcon } from "../GuildIcon";

import theme from "../../global/styles/theme";

import {
	CategoryName,
	PlayersInfo,
	Container,
	DateInfo,
	Content,
	Footer,
	Header,
	Title,
	Owner,
	Date,
} from "./styles";

export type GuildProps = {
	icon: string | null;
	owner: boolean;
	name: string;
	id: string;
};

export type AppointmentProps = {
	description: string;
	guild: GuildProps;
	category: string;
	date: string;
	id: string;
};

type Props = RectButtonProps & { data: AppointmentProps };

export function Appointment({ data, ...rest }: Props) {
	const { primary, on, secondary50, secondary70 } = theme.colors;

	const [category] = categories.filter((item) => item.id === data.category);
	console.log("category in components/Appointmets: ", category);

	const { owner } = data.guild;

	return (
		<Container {...rest}>
			<LinearGradient
				colors={[secondary50, secondary70]}
				style={{
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 8,
					marginRight: 20,
					height: 68,
					width: 64,
				}}
			>
				<GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
			</LinearGradient>

			<Content>
				<Header>
					<Title>{data.guild.name}</Title>

					{category && <CategoryName>{category.title}</CategoryName>}
				</Header>

				<Footer>
					<DateInfo>
						<CalendarSvg />

						<Date>{data.date}</Date>
					</DateInfo>

					<PlayersInfo>
						<PlayerSvg fill={owner ? primary : on} />

						<Owner owner={owner}>{owner ? "Anfitrião" : "Visitante"}</Owner>
					</PlayersInfo>
				</Footer>
			</Content>
		</Container>
	);
}
