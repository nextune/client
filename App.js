import React from 'react';
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
			<Provider store={Store}>
				<Album />
			</Provider>
		);
	}
}