import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";

import { MemberProps } from "../../components/Member";

export const ImageBackgroundContent = styled.View`
	flex: 1;

	justify-content: flex-end;

	margin-bottom: 30px;
	padding-left: 24px;
	padding-right: 24px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title700};
	font-size: 28px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text400};
	font-size: 13px;
	line-height: 21px;

	color: ${({ theme }) => theme.colors.heading};
`;

export const List = styled(FlatList as new () => FlatList<MemberProps>)`
	margin-left: 24px;
	margin-top: 27px;
`;

export const Footer = styled.View`
	padding: 20px 24px;

	margin-bottom: ${getBottomSpace()}px;
`;
