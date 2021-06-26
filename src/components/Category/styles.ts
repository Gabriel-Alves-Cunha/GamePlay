import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";

type Props = {
	checked: boolean;
};

export const Container = styled(RectButton)``;

export const LinGrad = styled(LinearGradient)`
	width: 104px;
	height: 120px;

	justify-content: center;
	align-items: center;

	border-radius: 8px;

	margin-right: 8px;
`;

export const Content = styled(LinearGradient)<Props>`
	opacity: ${({ checked }) => (checked ? 1 : 0.4)};

	width: 100px;
	height: 116px;
	padding-top: 20px;
	padding-bottom: 20px;

	border-radius: 8px;

	justify-content: space-between;
	align-items: center;
`;

export const CheckedSquare = styled.View<Props>`
	${({ checked }) => {
		// console.log("Checked:", checked);

		if (checked) {
			return css`
				position: absolute;
				top: 7px;
				right: 7px;
				width: 10px;
				height: 10px;

				background-color: ${({ theme }) => theme.colors.primary};

				border-radius: 3px;
			`;
		} else
			return css`
				position: absolute;
				top: 7px;
				right: 7px;
				width: 12px;
				height: 12px;

				background-color: ${({ theme }) => theme.colors.secondary100};

				border-color: ${({ theme }) => theme.colors.secondary50};
				border-width: 2px;
				border-radius: 3px;
			`;
	}};
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 15px;

	color: ${({ theme }) => theme.colors.heading};

	margin-top: 15px;
`;
