import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Card from '../components/card';
import MoreInfo from '../components/more-info';
import Navbar from '../components/navbar';
import SwipeIndicator from '../components/swipe-indicator';
import Styles from '../styles';
import { Colors } from '../globals';

const Home = () => {

    return (
        <SafeAreaView style={Styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never' snapToOffsets={[0]} decelerationRate='fast'>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={Colors.DARK} />
                <Navbar />
                <Card />
                <SwipeIndicator />
                <MoreInfo navigate/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;