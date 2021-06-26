import React from "react";
import { Image } from "react-native";

import { Container } from "./styles";

import theme from "../../global/styles/theme";

type Props = {
	url: string;
};

export function Avatar({ url }: Props) {
	const { secondary50, secondary70 } = theme.colors;

	return (
		<Container colors={[secondary50, secondary70]}>
			<Image source={{ uri: url }} style={{
				width: 46,
				height: 46,
				borderRadius: 8
			}} />
		</Container>
	);
}
