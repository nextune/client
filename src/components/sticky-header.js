import React from 'react';
import { StyleSheet, Animated, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Window } from 'globals';
import { useNavigation } from '@react-navigation/native';

const stickyHeaderHeight = Window.WIDTH * 0.64;

export const StickyHeader = (props) => {

    const navigation = useNavigation();
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const headerAnimation = (range) => (props.scroll.interpolate({
        inputRange: [0, stickyHeaderHeight],
        outputRange: range,
        extrapolate: 'clamp',
    }))

    const headerAnimationValues = {
        collapse: [Window.WIDTH, Window.WIDTH - stickyHeaderHeight],
        iconTranslate: [0, stickyHeaderHeight],
        titleTranslate: [0, Window.WIDTH * 0.02],
        subtitleTranslate: [0, Window.WIDTH * -0.05],
        titleScale: [1, 0.75],
        colorFadeIn: ['rgba(17,17,17,0)', 'rgba(17,17,17,0.67)'],
        fadeIn: [0, 1],
        fadeOut: [1, 0],
    }

    return (
        <View style={header_styles.header_container}>
            <Animated.View style={[header_styles.header, {
                height: headerAnimation(headerAnimationValues.collapse)
            }]}>
                <ImageBackground source={props.art} style={header_styles.image_background}>
                    <Animated.View style={[header_styles.readability_overlay, {
                        backgroundColor: headerAnimation(headerAnimationValues.colorFadeIn)
                    }]}>
                        <LinearGradient colors={[Colors.TRANSLUCENTISH, Colors.DARK]} style={header_styles.gradient}>
                            <Animated.View style={[header_styles.icon_container, {
                                transform: [
                                    { translateY: headerAnimation(headerAnimationValues.iconTranslate) }
                                ]
                            }]}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <FontAwesome5 name={"chevron-left"} color={Colors.WHITE} size={20} />
                                </TouchableOpacity>
                            </Animated.View>
                            <View style={header_styles.text_container}>
                                <Animated.Text numberOfLines={1} style={[header_styles.header_title, {
                                    transform: [
                                        { translateY: headerAnimation(headerAnimationValues.titleTranslate) },
                                        { scale: headerAnimation(headerAnimationValues.titleScale) },
                                    ]
                                }]}>{props.title}</Animated.Text>
                                <Animated.Text numberOfLines={1} style={[header_styles.header_subtitle, {
                                    opacity: headerAnimation(headerAnimationValues.fadeOut),
                                    transform: [
                                        { translateY: headerAnimation(headerAnimationValues.subtitleTranslate) },
                                    ]
                                }]}>{props.subtitle}</Animated.Text>
                            </View>
                            <Animated.View style={[header_styles.icon_container, {
                                transform: [
                                    { translateY: headerAnimation(headerAnimationValues.iconTranslate) }
                                ]
                            }]}>
                                <TouchableOpacity>
                                    <FontAwesome5 name={"ellipsis-v"} color={Colors.WHITE} size={20} />
                                </TouchableOpacity>
                            </Animated.View>
                        </LinearGradient>
                    </Animated.View>
                </ImageBackground>
            </Animated.View>
            <AnimatedLinearGradient colors={[Colors.DARK, Colors.TRANSLUCENT, 'transparent']} locations={[0, 0.36, 1]} style={[header_styles.list_fade, {
                opacity: headerAnimation(headerAnimationValues.fadeIn)
            }]} />
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
        resizeMode: 'cover',
    },
    readability_overlay: {
        flex: 1,
    },
    icon_container: {
        bottom: Window.HEIGHT * 0.326,
        width: '5%',
        alignItems: 'center',
    },
    text_container: {
        flex: 1,
    },
    list_fade: {
        height: Window.WIDTH * 0.08,
    },
    image_background: {
        flex: 1,
        resizeMode: 'cover',
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
    gradient: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: '6%',
        paddingBottom: '10%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})

export const scrollHandler = (scroll) => (
    Animated.event(
        [{ nativeEvent: { contentOffset: { y: scroll } } }],
        { useNativeDriver: false }
    )
)