import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Card from 'components/card';
import Carousel from 'components/carousel';
import Navbar from 'components/navbar';
import SwipeIndicator from 'components/swipe-indicator';
import Styles from 'styles';
import { Colors } from 'globals';
import { moreInfo } from 'data';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { scrollHandler } from 'animations';

const Home = () => {

    const scroll = useSharedValue(0);

    return (
        <SafeAreaView style={Styles.body}>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                snapToOffsets={[0]}
                decelerationRate='fast'
                onScroll={scrollHandler(scroll)}
                scrollEventThrottle={16}
            >
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={Colors.DARK} />
                <Navbar />
                <Card />
                <SwipeIndicator scroll={scroll} />
                <Carousel data={moreInfo} />
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

export default Home;