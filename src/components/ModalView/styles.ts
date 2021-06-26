import styled, { css } from "styled-components/native";

type ContainerProps = {
	marginTop: number;
};

export const Container = styled.View<ContainerProps>`
	flex: 1;

	margin-top: ${({ marginTop }) => marginTop}px;
`;

export const Overlay = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.overlay};
`;

export const Bar = styled.View`
	width: 39px;
	height: 2px;

	border-radius: 2px;

	background-color: ${({ theme }) => theme.colors.secondary30};

	align-self: center;

	margin-top: 13px;
`;
