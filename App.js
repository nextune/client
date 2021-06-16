import React from 'react';
import AppLoading from 'expo-app-loading';
import Home from './src/pages/home';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_500Medium,
	Baloo2_700Bold
} from '@expo-google-fonts/baloo-2';
import 'react-native-gesture-handler';

export default function App() {
	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_500Medium,
		Baloo2_700Bold
	});

	return (
		<Provider store={Store}>
			{fontsLoaded ? <Home /> : <AppLoading />}
		</Provider>
	);
}