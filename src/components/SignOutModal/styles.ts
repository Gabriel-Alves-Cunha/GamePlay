import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
	flex: 1;

	margin-top: 10px;
`;

export const SignOutTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 24px;
	text-align: center;

	color: ${({ theme }) => theme.colors.heading};
`;

export const SignOutSubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title500};
	font-size: 20px;
	text-align: center;

	color: ${({ theme }) => theme.colors.heading};

	margin-bottom: 30px;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;

	margin-left: 20px;
	margin-right: 20px;
`;

export const SignOutButton = styled(TouchableOpacity)`
	flex-direction: row;

	width: 100%;
	height: 56px;

	align-items: center;

	background-color: ${({ theme }) => theme.colors.primary};

	border-radius: 8px;
`;

export const Title = styled.Text`
	flex: 1;
	text-align: center;

	font-family: ${({ theme }) => theme.fonts.text500};
	font-size: 15px;

	color: ${({ theme }) => theme.colors.heading};
`;
