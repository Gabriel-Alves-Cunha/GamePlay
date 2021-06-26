import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Container, BackButton, Title, Action } from "./styles";

import theme from "../../global/styles/theme";

type Props = {
	action?: ReactNode;
	title: string;
};

export function HeaderComponent({ title, action }: Props) {
	const nav = useNavigation();

	const { secondary100, secondary40, heading } = theme.colors;

	function handleGoBack() {
		nav.goBack();
	}

	return (
		<Container colors={[secondary100, secondary40]}>
			<BackButton onPress={handleGoBack}>
				<Feather name="arrow-left" size={24} color={heading} />
			</BackButton>

			<Title>{title}</Title>

			{action && <Action>{action}</Action>}
		</Container>
	);
}
