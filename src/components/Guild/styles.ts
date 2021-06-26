import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
	flex-direction: row;
	width: 100%;

	align-items: center;

	padding-left: 24px;
	padding-right: 24px;
`;

export const Content = styled.View`
	flex: 1;

	justify-content: center;

	margin-left: 20px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 18px;

	color: ${({ theme }) => theme.colors.heading};

	margin-bottom: 4px;
`;

export const Owner = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.highlight};
`;
