import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;

	justify-content: center;
	align-items: center;
`;

export const Content = styled.View`
	margin-top: -40px;

	padding-right: 50px;
	padding-left: 50px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 40px;
	line-height: 40px;
	text-align: center;

	color: ${({ theme }) => theme.colors.heading};

	margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title500};
	font-size: 15px;
	line-height: 25px;
	text-align: center;

	color: ${({ theme }) => theme.colors.heading};

	margin-bottom: 64px;
`;
