import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";

import { Container } from "./styles";

export function Loading() {
	return (
		<Container>
			<ActivityIndicator size="large" color={theme.colors.primary} />
		</Container>
	);
}
