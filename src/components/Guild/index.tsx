import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";
import { GuildProps } from "../Appointment";

import { Container, Content, TextContainer, Title, Owner } from "./styles";

import theme from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
	data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
	return (
		<Container {...rest} activeOpacity={0.7}>
			<GuildIcon guildId={data.id} iconId={data.icon} />

			<Content>
				<TextContainer>
					<Title>{data.name}</Title>
					<Owner>{data.owner ? "Administrador" : "Convidado"}</Owner>
				</TextContainer>
			</Content>

			<Feather name="chevron-right" color={theme.colors.heading} size={24} />
		</Container>
	);
}
