import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Card from '../components/card';
import MoreInfo from '../components/more-info';
import Navbar from '../components/navbar';
import SwipeIndicator from '../components/swipe-indicator';
import Styles from '../styles';
import { Colors } from '../colors';

const Home = () => {

    return (
        <SafeAreaView style={Styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never' snapToOffsets={[0]} decelerationRate='fast'>
                <StatusBar barStyle="light-content" backgroundColor={Colors.DARK} />
                <Navbar />
                <Card />
                <SwipeIndicator />
                <MoreInfo />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;