import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Window } from 'globals';
import Animated from 'react-native-reanimated';
import { animations, animatedStyle } from 'animations';

const SwipeIndicator = (props) => {

    return (
        <View style={indicator_styles.container}>
            <Animated.View style={[indicator_styles.icon, animatedStyle(props.scroll, [
                animations.swipeIndicator.iconTranslate, animations.swipeIndicator.iconRotate
            ])]} >
                <FontAwesome5
                    name={"chevron-up"}
                    color={Colors.LIGHT}
                    size={20}
                />
            </Animated.View>
            <Animated.Text style={[indicator_styles.text, animatedStyle(props.scroll, [
                animations.swipeIndicator.textTranslate, animations.swipeIndicator.textFadeOut
            ])]}>
                More Info
            </Animated.Text>
            <Animated.Text style={[indicator_styles.text, animatedStyle(props.scroll, [
                animations.swipeIndicator.textTranslate, animations.swipeIndicator.textFadeIn
            ])]}>
                Return To Flow
            </Animated.Text>
        </View>
    )
}

const indicator_styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: Window.HEIGHT * 0.04,
        marginTop: Window.HEIGHT * 0.01,
        marginBottom: Window.HEIGHT * 0.03,
    },
    icon: {
        position: 'absolute',
        bottom: Window.WIDTH * 0.04,
    },
    text: {
        fontSize: 10,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
        position: 'absolute',
        top: Window.WIDTH * 0.04,
    },
})

export default SwipeIndicator;