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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StickyHeader } from './src/components/sticky-header';

const Stack = createStackNavigator(

);

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      	<Stack.Screen name="Home" component={Home}/>
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
			<Provider store={Store}>
				{/* <Album /> */}
				<NavigationContainer>
    				<MyStack />
    			</NavigationContainer>
			</Provider>
		);
	}
}