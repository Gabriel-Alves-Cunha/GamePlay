import styled from "styled-components/native";

type BulletStatusProps = {
	isOnline: boolean;
};

export const Container = styled.View`
	flex-direction: row;
	width: 100%;

	align-items: center;
`;

export const UserName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 18px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const StatusName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;

	color: ${({ theme }) => theme.colors.highlight};
`;

export const Content = styled.View``;

export const StatusContainer = styled.View`
	flex-direction: row;

	align-items: center;
`;

export const BulletStatus = styled.View<BulletStatusProps>`
	background-color: ${({ theme, isOnline }) => {
		console.log(isOnline);
		return isOnline ? theme.colors.on : theme.colors.primary;
	}};

	width: 8px;
	height: 8px;

	border-radius: 4px;

	margin-right: 9px;
`;
