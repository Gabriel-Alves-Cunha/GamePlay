import React from "react";
import { ReactNode } from "react";

import { Container } from "./styles";

import theme from "../../global/styles/theme";

type Props = {
	children: ReactNode;
};

export function Background({ children }: Props) {
	const { secondary80, secondary100 } = theme.colors;

	return <Container colors={[secondary80, secondary100]}>{children}</Container>;
}
