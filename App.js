import React from 'react';
import { View } from 'react-native';
import Home from 'pages/home';
import Album from 'pages/album';
import Artist from 'pages/artist';
import Loading from 'pages/loading';
import { Provider } from 'react-redux';
import { Store } from 'redux/store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Styles from 'styles';
import { Colors } from 'globals';
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_500Medium,
	Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2';

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
			<Stack.Screen name="Artist" component={Artist} />
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
		return <Loading />;
	}
	else {
		return (
			<Provider store={Store}>
				<View style={Styles.body}>
					<NavigationContainer theme={{ colors: { background: Colors.DARK } }}>
						<StackNavigator />
					</NavigationContainer>
				</View>
			</Provider>
		);
	}
}