import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
	flex-direction: row;
	width: 100%;
	height: 104px;

	padding-top: ${getStatusBarHeight()}px;
	padding-right: 24px;
	padding-left: 24px;

	justify-content: center;
	align-items: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
	flex: 1;

	text-align: center;

	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 20px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const Action = styled.View``;
