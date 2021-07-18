import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Styles from '../styles';
import { Colors } from '../colors';

const SwipeIndicator = () => {
    const window = useWindowDimensions();
    return (
        <View style={indicator_styles().indicator}>
            <FontAwesome5
                name={"chevron-up"}
                color={Colors.LIGHT}
                size={20}
            />
            <Text style={Styles.text}>More Info</Text>
        </View>
    )
}

const indicator_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            indicator: {
                justifyContent: "center",
                alignItems: "center",
                height: window.height * 0.05,
                marginTop: window.height * 0.005,
                marginBottom: window.height * 0.03,
            },
        })
    )
}

export default SwipeIndicator;