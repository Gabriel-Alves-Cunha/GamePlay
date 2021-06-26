import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;

	flex-direction: row;

	justify-content: space-between;
	align-items: center;

	padding: 0 24px;

	margin-top: 27px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 18px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.highlight};
`;
