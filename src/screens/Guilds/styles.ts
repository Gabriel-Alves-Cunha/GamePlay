import styled from "styled-components/native";
import { FlatList } from "react-native";
import { GuildProps } from "../../components/Appointment";

export const Container = styled.View`
	flex: 1;

	align-items: center;

	padding-top: 24px;
`;

export const List = styled(FlatList as new () => FlatList<GuildProps>)`
	width: 100%;
`;
