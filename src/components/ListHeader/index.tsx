import React from "react";

import { Container, Title, SubTitle } from "./styles";

type Props = {
	title: string;
	subTitle: string;
};

export function ListHeader({ title, subTitle }: Props) {
	return (
		<Container>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
		</Container>
	);
}
