import { setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Card from '../components/card';
import Navbar from '../components/navbar';
import Styles from '../styles';

const Home = () => {
    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle={setStatusBarStyle("light")} />
            <Navbar />

            <View style={Styles.container}>
                <Text style={Styles.title}>Rahul's Flow</Text>
                <Card />
            </View>
        </SafeAreaView>
    )
}

export default Home;