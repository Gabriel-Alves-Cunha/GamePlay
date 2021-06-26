import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

type IsOwner = {
	owner: boolean;
};

export const Container = styled(RectButton)`
	flex-direction: row;

	align-self: center;

	width: 100%;
`;

export const Content = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	flex-direction: row;

	width: 100%;

	justify-content: space-between;

	margin-bottom: 12px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 18px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const CategoryName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.highlight};

	margin-right: 24px;
`;

export const Footer = styled.View`
	flex-direction: row;

	width: 100%;

	justify-content: space-between;
`;

export const DateInfo = styled.View`
	flex-direction: row;

	align-items: center;
`;

export const PlayersInfo = styled.View`
	flex-direction: row;

	align-items: center;
`;

export const Date = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text500};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.heading};

	margin-left: 7px;
`;

export const Owner = styled.Text<IsOwner>`
	font-family: ${({ theme }) => theme.fonts.text500};
	font-size: 13px;

	color: ${({ owner, theme }) =>
		owner ? theme.colors.primary : theme.colors.on};

	margin-left: 7px;
	margin-right: 24px;
`;
