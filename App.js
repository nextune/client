import { setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/card';
import Navbar from './src/components/navbar';
import Styles from './src/styles';

export default function App() {
	return (
		<SafeAreaView style={Styles.body}>
			<StatusBar barStyle={setStatusBarStyle("light")} />
			<Navbar />

			<View style={Styles.container}>
				<Text style={Styles.title}>Rahul's Flow</Text>
				<Card />
			</View>


		</SafeAreaView>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });