import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Window } from 'globals';

const SwipeIndicator = () => {
    return (
        <View style={indicator_styles.indicator}>
            <FontAwesome5
                name={"chevron-up"}
                color={Colors.LIGHT}
                size={20}
            />
            <Text style={indicator_styles.text}>More Info</Text>
        </View>
    )
}

const indicator_styles = StyleSheet.create({
    indicator: {
        justifyContent: "center",
        alignItems: "center",
        height: Window.HEIGHT * 0.04,
        marginTop: Window.HEIGHT * 0.01,
        marginBottom: Window.HEIGHT * 0.03,
    },
    text: {
        fontSize: 10,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
    },
})

export default SwipeIndicator;