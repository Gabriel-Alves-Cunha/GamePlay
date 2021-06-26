import React from "react";

import {
	ButtonsContainer,
	SignOutButton,
	SignOutSubTitle,
	SignOutTitle,
	Container,
	Title,
} from "./styles";

type Props = {
	signOut(): void;
};

export function SignOutModal({ signOut }: Props) {
	return (
		<Container>
			<SignOutTitle>Logout</SignOutTitle>
			<SignOutSubTitle>Deseja sair do GamePlay?</SignOutSubTitle>
			<ButtonsContainer>
				<SignOutButton onPress={signOut}>
					<Title>Sim</Title>
				</SignOutButton>
			</ButtonsContainer>
		</Container>
	);
}
