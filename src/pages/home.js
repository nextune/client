import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Card from '../components/card';
import Navbar from '../components/navbar';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMoreInfo } from '../redux/actions/home';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles';
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
            <SafeAreaView style={styles.body}>
                <StatusBar barStyle="light-content" backgroundColor="#111111" />
                <View style={styles.container}>
                    <Navbar />
                    <Card />
                    <View style={home_styles.flow_title}>
                        <FontAwesome5
                            style={{ alignSelf: 'center' }}
                            name={"chevron-up"}
                            color={"#cae3ea"}
                            size={20}
                        />
                        <Text style={styles.sub_text}>See related</Text>
                    </View>
                </View>
            </SafeAreaView>
        </FlingGestureHandler >
    )
}

const home_styles = StyleSheet.create({
    flow_title: {
        flex: 1,
        alignSelf: 'center',
        paddingVertical: 5,
    },
})

export default Home;