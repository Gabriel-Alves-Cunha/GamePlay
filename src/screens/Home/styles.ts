import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";

import { AppointmentProps } from "../../components/Appointment";

export const Header = styled.View`
	flex-direction: row;

	width: 100%;
	padding: 0 24px;

	justify-content: space-between;
	align-items: center;

	margin-top: ${getStatusBarHeight() + 26}px;
	margin-bottom: 42px;
`;

export const Content = styled.View`
	margin-top: 42px;
`;

export const List = styled(FlatList as new () => FlatList<AppointmentProps>)`
	margin-top: 24px;
	margin-left: 24px;
`;
