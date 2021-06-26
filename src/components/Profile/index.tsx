import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

import { SignOutModal } from "../SignOutModal";
import { ModalView } from "../ModalView";
import { Avatar } from "../Avatar";

import { Container, Content, User, UserName, Greeting, Title } from "./styles";

export function Profile() {
	const { user, signOut } = useAuth();

	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleSignOut() {
		console.log("handleSignOut");
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		console.log("handleCloseModal");

		setIsModalOpen(false);
	}

	return (
		<Container>
			<RectButton onPress={handleSignOut}>
				<Avatar url={user.avatar} />
			</RectButton>

			<Content>
				<User>
					<Greeting>Olá, </Greeting>
					<UserName>{user.firstName}</UserName>
				</User>

				<Title>Hoje é dia de vitória!</Title>
			</Content>

			<ModalView
				visible={isModalOpen}
				closeModal={handleCloseModal}
				marginTop={600}
			>
				<SignOutModal signOut={signOut} />
			</ModalView>
		</Container>
	);
}
