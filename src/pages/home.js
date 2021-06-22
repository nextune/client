import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Card from '../components/card';
import Navbar from '../components/navbar';
import SwipeIndicator from '../components/swipe-indicator';
import Styles from '../styles';
import { Colors } from '../globals';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMoreInfo } from '../redux/actions/home';
import * as Haptics from 'expo-haptics';

const Home = () => {
    const { moreInfo } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    const onSwipeUpHandler = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        dispatch(toggleMoreInfo(!moreInfo));
    }

    return (
        <FlingGestureHandler
            direction={Directions.UP}
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) { onSwipeUpHandler() }
            }}
        >
            <SafeAreaView style={Styles.body}>
                <StatusBar barStyle="light-content" backgroundColor={Colors.DARK} />
                <Navbar />
                <Card />
                <SwipeIndicator />
            </SafeAreaView>
        </FlingGestureHandler >
    )
}

export default Home;