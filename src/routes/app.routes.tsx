import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppointmentDetails } from "../screens/AppointmentDetails";
import { CreateAppointment } from "../screens/CreateAppointment";
import { Home } from "../screens/Home";

import theme from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	return (
		// unordered list of screens
		<Navigator
			headerMode="none"
			screenOptions={{ cardStyle: { backgroundColor: theme.colors.secondary100 } }}
			initialRouteName="Home"
		>
			<Screen name="AppointmentDetails" component={AppointmentDetails} />
			<Screen name="CreateAppointment" component={CreateAppointment} />
			<Screen name="Home" component={Home} />
		</Navigator>
	);
}
