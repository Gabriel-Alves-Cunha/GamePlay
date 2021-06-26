import React, { ReactNode } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

import { Background } from "../Background";

import { Container, Overlay, Bar } from "./styles";

type Props = ModalProps & {
	marginTop: number;
	children: ReactNode;
	closeModal(): void;
};

export function ModalView({
	marginTop,
	children,
	closeModal,
	...rest
}: Props) {
	return (
		<Modal transparent animationType="slide" statusBarTranslucent {...rest}>
			<TouchableWithoutFeedback onPress={closeModal}>
				<Overlay>
					<Container marginTop={marginTop}>
						<Background>
							<Bar />

							{children}
						</Background>
					</Container>
				</Overlay>
			</TouchableWithoutFeedback>
		</Modal>
	);
}
