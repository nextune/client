import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Home from './src/pages/home';
import Album from './src/pages/album';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_500Medium,
	Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Styles from './src/styles';
import { Colors } from './src/globals';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false,
			gestureEnabled: true,
			...TransitionPresets.SlideFromRightIOS,
		}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Album" component={Album} />
		</Stack.Navigator>

	);
}

export default function App() {

	const [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_500Medium,
		Baloo2_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	else {
		return (
			<Provider store={Store} style={Styles.body}>
				<View style={Styles.body}>
					<NavigationContainer theme={{ colors: { background: Colors.DARK } }}>
						<StackNavigator />
					</NavigationContainer>
				</View>
			</Provider>
		);
	}
}