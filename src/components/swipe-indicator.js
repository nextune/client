import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Styles from '../styles';
import { Colors } from '../globals';

const SwipeIndicator = () => {
    return (
        <View style={indicator_styles.indicator}>
            <FontAwesome5
                name={"chevron-up"}
                color={Colors.LIGHT}
                size={20}
            />
            <Text style={Styles.text}>See Related</Text>
        </View>
    )
}

const indicator_styles = StyleSheet.create({
    indicator: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default SwipeIndicator;