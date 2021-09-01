import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Window } from 'globals';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { animations, animatedStyle, stickyHeaderHeight } from 'animations';

const StickyHeader = (props) => {

    const navigation = useNavigation();
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    return (
        <View style={header_styles.header_container}>
            <Animated.View style={[header_styles.header, animatedStyle(props.scroll, [animations.stickyHeader.collapse])]}>
                <Animated.Image source={props.art} style={[header_styles.image_background, animatedStyle(props.scroll, [animations.stickyHeader.parallax])]} />
                <LinearGradient colors={[Colors.TRANSLUCENTISH, Colors.DARK]} style={header_styles.gradient}>
                    <Animated.View style={[header_styles.icon_container, animatedStyle(props.scroll, [animations.stickyHeader.iconTranslate])]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome5 name={"chevron-left"} color={Colors.WHITE} size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                    <View style={header_styles.text_container}>
                        <Animated.Text numberOfLines={1} style={[header_styles.header_title, animatedStyle(props.scroll, [animations.stickyHeader.titleScale, animations.stickyHeader.titleTranslate])]}>{props.title}</Animated.Text>
                        <Animated.Text numberOfLines={1} style={[header_styles.header_subtitle, animatedStyle(props.scroll, [animations.stickyHeader.subtitleTranslate, animations.stickyHeader.fadeOut])]}>{props.subtitle}</Animated.Text>
                    </View>
                    <Animated.View style={[header_styles.icon_container, animatedStyle(props.scroll, [animations.stickyHeader.iconTranslate])]}>
                        <TouchableOpacity>
                            <FontAwesome5 name={"ellipsis-v"} color={Colors.WHITE} size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                </LinearGradient>
            </Animated.View>
            <AnimatedLinearGradient colors={[Colors.DARK, Colors.TRANSLUCENT, 'transparent']} locations={[0, 0.36, 1]} style={[header_styles.list_fade, animatedStyle(props.scroll, [animations.stickyHeader.fadeIn])]} />
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

export default StickyHeader;