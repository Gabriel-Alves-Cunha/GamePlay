import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
	flex-direction: row;

	width: 100%;
	height: 56px;

	align-items: center;

	background-color: ${({ theme }) => theme.colors.primary};

	border-radius: 8px;
`;

export const IconImgWrapper = styled.View`
	width: 56px;
	height: 56px;

	justify-content: center;
	align-items: center;

	border-right-width: 1px;
	border-right-color: ${({ theme }) => theme.colors.line};
`;

export const IconImg = styled.Image`
	width: 24px;
	height: 18px;
`;

export const Title = styled.Text`
	flex: 1;
	text-align: center;

	font-family: ${({ theme }) => theme.fonts.text500};
	font-size: 15px;

	color: ${({ theme }) => theme.colors.heading};
`;
