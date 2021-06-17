import { setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Card from '../components/card';
import Navbar from '../components/navbar';
import Styles from '../styles';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMoreInfo } from '../redux/actions/home';
import { FontAwesome5 } from '@expo/vector-icons';

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
            <SafeAreaView style={Styles.body}>
                <StatusBar barStyle={setStatusBarStyle("light")} />
                <Navbar />


                <View style={Styles.container}>
                    <Text style={Styles.title}>Rahul's Flow and {moreInfo ? "Yes" : "No"}</Text>
                    <Card />
                </View>

                <View style={[Styles.centered, { marginTop: 20 }]}>
                    <FontAwesome5
                        name={"angle-up"}
                        color="#cae3ea"
                        size={40}
                    />
                    {/* <Text style={Styles.sub_text}>Swipe up</Text> */}
                </View>
            </SafeAreaView>
        </FlingGestureHandler >
    )
}

export default Home;