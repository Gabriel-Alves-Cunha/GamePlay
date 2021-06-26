import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import DiscordPng from "../../assets/discord.png";

import { Container, IconImgWrapper, IconImg, Title } from "./styles";

type Props = RectButtonProps & {
	title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
	return (
		<Container {...rest}>
			<IconImgWrapper>
				<IconImg source={DiscordPng} />
			</IconImgWrapper>

			<Title>{title}</Title>
		</Container>
	);
}
