import styled, { css } from "styled-components/native";

import { Props } from ".";

export const Container = styled.View<Props>`
	width: 78%;
	height: 1px;

	background-color: ${({ theme }) => theme.colors.secondary40};

	${({ isCentered }) =>
		isCentered
			? css`
					margin-top: 12px;
					margin-bottom: 12px;
			  `
			: css`
					margin-top: 2px;
					margin-bottom: 31px;
			  `}

	align-self: flex-end;
`;
