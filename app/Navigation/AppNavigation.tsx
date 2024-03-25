import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../Screens/HomePage";
import DetailsPage from "../Screens/DetailsPage";
import { Post } from "../Services/types";

export type RootStackParamList = {
	Home: undefined;
	Details: { postId: Post["id"] };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigation() {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Details" component={DetailsPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
