import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
	width: 48px;
	height: 48px;

	background-color: ${({ theme }) => theme.colors.secondary40};
	color: ${({ theme }) => theme.colors.heading};

	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	margin-right: 4px;

	text-align: center;

	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.secondary50};
`;
