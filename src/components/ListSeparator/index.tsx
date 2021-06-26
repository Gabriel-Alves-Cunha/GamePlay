import React from "react";

import { Container } from "./styles";

export type Props = {
	isCentered?: boolean;
};

export function ListSeparator({ isCentered = false }: Props) {
	return <Container isCentered />;
}
