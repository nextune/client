import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Card from '../components/card';
import Navbar from '../components/navbar';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMoreInfo } from '../redux/actions/home';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles';

const Home = () => {
    const { moreInfo } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    const onSwipeUpHandler = () => {
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
                    <View style={home_styles.flow_title}>
                        <Text style={Styles.title}>Rahul's Flow and {moreInfo ? "Yes" : "No"}</Text>
                    </View>
                    <Card />
                    <View style={[Styles.centered, { marginTop: 20 }]}>
                        <FontAwesome5
                            name={"angle-up"}
                            color="#cae3ea"
                            size={40}
                        />
                        {/* <Text style={Styles.sub_text}>Swipe up</Text> */}
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
    },
})

export default Home;