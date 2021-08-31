import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Window } from 'globals';
import { useNavigation } from '@react-navigation/native';
import Animated, { interpolate, Extrapolate, useAnimatedScrollHandler, useAnimatedStyle, interpolateColor } from 'react-native-reanimated';

const stickyHeaderHeight = Window.WIDTH * 0.64;
const defaultInputRange = [0, stickyHeaderHeight];

const animation = {
    collapse: {
        type: 'translateY',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [0, -stickyHeaderHeight],
    },
    parallax: {
        type: 'translateY',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [0, stickyHeaderHeight / 2],
    },
    iconTranslate: {
        type: 'translateY',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [0, stickyHeaderHeight],
    },
    titleTranslate: {
        type: 'translateY',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [0, Window.WIDTH * 0.03],
    },
    subtitleTranslate: {
        type: 'translateY',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [0, Window.WIDTH * -0.04],
    },
    titleScale: {
        type: 'scale',
        isTransform: true,
        inputRange: defaultInputRange,
        outputRange: [1, 0.75],
    },
    fadeIn: {
        type: 'opacity',
        isTransform: false,
        inputRange: [0, stickyHeaderHeight * 0.99, stickyHeaderHeight],
        outputRange: [0, 0, 1],
    },
    fadeOut: {
        type: 'opacity',
        isTransform: false,
        inputRange: defaultInputRange,
        outputRange: [1, 0],
    },
}

export const StickyHeader = (props) => {

    const navigation = useNavigation();
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const animatedStyle = (animations) => useAnimatedStyle(() => {

        const style = {};
        const transforms = [];

        animations.forEach(animation => {

            const interpolatedValue = interpolate(
                props.scroll.value,
                animation.inputRange,
                animation.outputRange,
                Extrapolate.CLAMP,
            )

            animation.isTransform ?
                transforms.push(Object.defineProperty(Object.create(null), animation.type, { value: interpolatedValue, enumerable: true })) :
                Object.defineProperty(style, animation.type, { value: interpolatedValue, enumerable: true })

        });

        transforms.length > 0 ? Object.defineProperty(style, 'transform', { value: transforms, enumerable: true }) : null

        return style;

    })

    return (
        <View style={header_styles.header_container}>
            <Animated.View style={[header_styles.header, animatedStyle([animation.collapse])]}>
                <Animated.Image source={props.art} style={[header_styles.image_background, animatedStyle([animation.parallax])]} />
                <LinearGradient colors={[Colors.TRANSLUCENTISH, Colors.DARK]} style={header_styles.gradient}>
                    <Animated.View style={[header_styles.icon_container, animatedStyle([animation.iconTranslate])]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome5 name={"chevron-left"} color={Colors.WHITE} size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                    <View style={header_styles.text_container}>
                        <Animated.Text numberOfLines={1} style={[header_styles.header_title, animatedStyle([animation.titleScale, animation.titleTranslate])]}>{props.title}</Animated.Text>
                        <Animated.Text numberOfLines={1} style={[header_styles.header_subtitle, animatedStyle([animation.subtitleTranslate, animation.fadeOut])]}>{props.subtitle}</Animated.Text>
                    </View>
                    <Animated.View style={[header_styles.icon_container, animatedStyle([animation.iconTranslate])]}>
                        <TouchableOpacity>
                            <FontAwesome5 name={"ellipsis-v"} color={Colors.WHITE} size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                </LinearGradient>
            </Animated.View>
            <AnimatedLinearGradient colors={[Colors.DARK, Colors.TRANSLUCENT, 'transparent']} locations={[0, 0.36, 1]} style={[header_styles.list_fade, animatedStyle([animation.fadeIn])]} />
        </View>
    )
}

const header_styles = StyleSheet.create({
    header_container: {
        position: 'absolute',
        zIndex: 1,
    },
    header: {
        width: Window.WIDTH,
        height: Window.WIDTH,
        overflow: 'hidden',
    },
    image_background: {
        position: 'absolute',
        width: Window.WIDTH,
        height: Window.WIDTH,
        resizeMode: 'cover',
    },
    readability_overlay: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: '6%',
        paddingBottom: '10%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon_container: {
        bottom: Window.HEIGHT * 0.326,
        width: '5%',
        alignItems: 'center',
    },
    text_container: {
        flex: 1,
    },
    header_title: {
        fontSize: 24,
        marginBottom: '-2%',
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    header_subtitle: {
        fontSize: 12,
        color: Colors.WHITE,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    list_fade: {
        bottom: stickyHeaderHeight,
        height: Window.WIDTH * 0.08,
    },
})

export const scrollHandler = (scroll) => useAnimatedScrollHandler({
    onScroll: (event) => {
        scroll.value = event.contentOffset.y;
    },
});