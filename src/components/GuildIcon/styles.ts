import styled from "styled-components/native";

type Props = {
	hasIconId: boolean;
};

export const Container = styled.View<Props>`
	width: 62px;
	height: 66px;

	border-radius: 8px;

	background-color: ${({ hasIconId, theme }) =>
		hasIconId ? "transparent" : theme.colors.discord};

	align-items: center;
	justify-content: center;

	overflow: hidden;
`;

export const Content = styled.Image`
	width: 62px;
	height: 66px;
`;
