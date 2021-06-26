import styled from "styled-components/native";

export const Label = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 18px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const Form = styled.View`
	margin-left: 24px;
	margin-right: 24px;

	margin-top: 32px;
`;

export const Select = styled.View`
	flex-direction: row;
	width: 100%;
	height: 68px;

	border-color: ${({ theme }) => theme.colors.secondary50};
	border-width: 1px;
	border-radius: 8px;

	align-items: center;

	padding-right: 25px;

	overflow: hidden;
`;

export const SelectBody = styled.View`
	flex: 1;

	align-items: center;
`;

export const NoImg = styled.View`
	width: 64px;
	height: 68px;

	background-color: ${({ theme }) => theme.colors.secondary40};

	border-color: ${({ theme }) => theme.colors.secondary50};
	border-width: 1px;
	border-radius: 8px;
`;

export const FieldContainer = styled.View``;

export const Field = styled.View`
	flex-direction: row;
	width: 100%;

	justify-content: space-between;

	margin-top: 30px;
`;

export const Column = styled.View`
	flex-direction: row;

	align-items: center;
`;

export const Divider = styled.Text`
	margin-right: 4px;

	font-family: ${({ theme }) => theme.fonts.text500};
	font-size: 15px;

	color: ${({ theme }) => theme.colors.highlight};
`;

export const CharLimit = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.highlight};
`;

export const Footer = styled.View`
	margin: 20px 24px 56px;
`;
