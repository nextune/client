import React, { useRef } from 'react';
import { StatusBar, Animated, StyleSheet, SafeAreaView, View, useWindowDimensions, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import Track from '../components/track';
import Styles from '../styles';
import { Colors } from '../colors';

const Album = () => {

    const window = useWindowDimensions();

    const album = {
        title: "Legends Never Die",
        artist: "Juice WRLD",
        art: require("../../assets/imgs/legends_never_die.png"),
        year: "2020",
    }

    const tracks = [
        { title: "Anxiety - Intro", artist: "Juice WRLD" },
        { title: "Conversations", artist: "Juice WRLD" },
        { title: "Titanic", artist: "Juice WRLD" },
        { title: "Bad Energy", artist: "Juice WRLD" },
        { title: "Righteous", artist: "Juice WRLD" },
        { title: "Blood On My Jeans", artist: "Juice WRLD" },
        { title: "Smile", artist: "Juice WRLD, The Weeknd" },
        { title: "Tell Me U Luv Me", artist: "Juice WRLD, Trippie Redd" },
        { title: "Hate The Other Side", artist: "Juice WRLD, Marshmello, The Kid Laroi, Polo G" },
        { title: "Get Through It - Interlude", artist: "Juice WRLD" },
        { title: "Life's A Mess", artist: "Juice WRLD, Halsey" },
        { title: "Come & Go", artist: "Juice WRLD, Marshmello" },
        { title: "I Want It", artist: "Juice WRLD" },
        { title: "Fighting Demons", artist: "Juice WRLD" },
        { title: "Wishing Well", artist: "Juice WRLD" },
        { title: "Screw Juice", artist: "Juice WRLD" },
        { title: "Up Up And Away", artist: "Juice WRLD" },
        { title: "The Man, The Myth, The Legend - Interlude", artist: "Juice WRLD" },
        { title: "Stay High", artist: "Juice WRLD" },
        { title: "Can't Die", artist: "Juice WRLD" },
        { title: "Man Of The Year", artist: "Juice WRLD" },
        { title: "Juice WRLD Speaks From Heaven - Outro", artist: "Juice WRLD" },
    ]

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const scroll = useRef(new Animated.Value(0)).current;
    const ref = useRef(null);

    const stickyHeaderHeight = window.width * 0.64;

    const getCloser = (value, checkOne, checkTwo) => Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scroll } } }],
        { useNativeDriver: false }
    );

    const handleSnap = ({ nativeEvent }) => {
        const offset = nativeEvent.contentOffset.y;
        const snapPoint = stickyHeaderHeight;
        (offset > 0 && offset < snapPoint) ? ref.current ? ref.current.scrollToOffset({
            offset: getCloser(offset, 0, stickyHeaderHeight) == 0 ? -snapPoint : snapPoint
        }) : null : null;
    }

    const headerAnimation = (range) => (scroll.interpolate({
        inputRange: [0, stickyHeaderHeight],
        outputRange: range,
        extrapolate: 'clamp',
    }))

    const headerAnimationValues = {
        collapse: [window.width, window.width - stickyHeaderHeight],
        iconTranslate: [0, stickyHeaderHeight],
        titleTranslate: [0, window.width * 0.02],
        subtitleTranslate: [0, window.width * -0.05],
        titleScale: [1, 0.75],
        colorFadeIn: ['rgba(17,17,17,0)', 'rgba(17,17,17,0.67)'],
        fadeIn: [0, 1],
        fadeOut: [1, 0],
    }

    const AlbumHeader = (props) => (
        <View style={album_styles().header_container}>
            <Animated.View style={[album_styles().header, { height: headerAnimation(headerAnimationValues.collapse) }]}>
                <ImageBackground source={props.art} style={album_styles().image_background}>
                    <Animated.View style={[album_styles().readability_overlay, {
                        backgroundColor: headerAnimation(headerAnimationValues.colorFadeIn)
                    }]}>
                        <LinearGradient colors={[Colors.TRANSLUCENTISH, Colors.DARK]} style={album_styles().gradient}>
                        <Animated.View style={[album_styles().icon_container, {
                                    bottom: window.height * 0.325,
                                    transform: [
                                        { translateY: headerAnimation(headerAnimationValues.iconTranslate) }
                                    ]
                                }]}>
                                <TouchableOpacity>
                                    <FontAwesome5 name={"chevron-left"} color={Colors.WHITE} size={20} />
                                </TouchableOpacity>
                            </Animated.View>
                            <View style={album_styles().text_container}>
                                <Animated.Text numberOfLines={1} style={[album_styles().header_title, {
                                    transform: [
                                        { translateY: headerAnimation(headerAnimationValues.titleTranslate) },
                                        { scale: headerAnimation(headerAnimationValues.titleScale) },
                                    ]
                                }]}>{props.title}</Animated.Text>
                                <Animated.Text numberOfLines={1} style={[album_styles().header_subtitle, {
                                    opacity: headerAnimation(headerAnimationValues.fadeOut),
                                    transform: [
                                        { translateY: headerAnimation(headerAnimationValues.subtitleTranslate) },
                                    ]
                                }]}>{props.artist} ({props.year})</Animated.Text>
                            </View>
                            <Animated.View style={[album_styles().icon_container, {
                                    bottom: window.height * 0.325,
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
            <AnimatedLinearGradient colors={[Colors.DARK, Colors.TRANSLUCENT, 'transparent']} style={[album_styles().list_fade, { opacity: headerAnimation(headerAnimationValues.fadeIn) }]} />
        </View>
    )

    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
            <AlbumHeader title={album.title} artist={album.artist} art={album.art} year={album.year} />
            <Animated.FlatList
                contentContainerStyle={{ paddingTop: window.width }}
                onScroll={handleScroll}
                onMomentumScrollEnd={handleSnap}
                fadingEdgeLength={100}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                ref={ref}
                data={tracks}
                keyExtractor={(tracks, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Track title={item.title} artist={item.artist} art={album.art} number={index + 1} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={album_styles().separator} />
                )}
                ListFooterComponent={() => (
                    <View>
                        <View style={album_styles().separator} />
                        <View style={album_styles().footer}>
                            <Text style={album_styles().footer_text}>Looks like you've reached the end :)</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const album_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            header_container: {
                position: 'absolute',
                zIndex: 1,
            },
            header: {
                width: window.width,
                resizeMode: 'cover',
            },
            readability_overlay: {
                flex: 1,
            },
            icon_container: {
                width: '5%',
                alignItems: 'center',
            },
            text_container: {
                flex: 1,
            },
            list_fade: {
                height: window.width * 0.075,
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
            separator: {
                backgroundColor: Colors.DARKISH,
                height: 1,
            },
            footer: {
                height: window.height * 0.05,
                justifyContent: 'center',
            },
            footer_text: {
                fontSize: 10,
                color: Colors.LIGHT,
                fontFamily: "Baloo2_400Regular",
                textTransform: 'uppercase',
                textAlign: 'center',
            },
        })
    )
}

export default Album;