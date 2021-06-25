import React from 'react';
import AppLoading from 'expo-app-loading';
import Home from './src/pages/home';
import Related from './src/pages/related';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_500Medium,
	Baloo2_700Bold
} from '@expo-google-fonts/baloo-2';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import styles from './src/styles';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
	const Stack = createStackNavigator();

	const [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_500Medium,
		Baloo2_700Bold
	});

	return (
		<Provider store={Store}>
			<NavigationContainer>
				<View style={styles.body}>
					<Stack.Navigator
						headerMode="none"
						mode="modal"
						initialRouteName="home"
					>
						<Stack.Screen
							name="home"
							component={Home}
						/>
						<Stack.Screen
							name="related"
							component={Related}
						/>
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</Provider>
	);
}