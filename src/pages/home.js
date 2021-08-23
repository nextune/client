import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Card from 'components/card';
import Carousel from 'components/carousel';
import Navbar from 'components/navbar';
import SwipeIndicator from 'components/swipe-indicator';
import Styles from 'styles';
import { Colors } from 'globals';
import { moreInfo } from 'data';

const Home = () => {

    return (
        <SafeAreaView style={Styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never' snapToOffsets={[0]} decelerationRate='fast'>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={Colors.DARK} />
                <Navbar />
                <Card />
                <SwipeIndicator />
                <Carousel data={moreInfo} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;