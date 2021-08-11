import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MediaPlayer from './card-components/media-player';
import Scrubber from './card-components/scrubber';
import { Colors, Window } from '../globals';

const Card = () => {
    return (
        <View style={card_styles.card_container}>
            <ImageBackground source={require("../../assets/imgs/legends_never_die.png")} style={card_styles.card}>
                <LinearGradient colors={['transparent', Colors.TRANSLUCENT]} locations={[0.4, 0.6]} style={card_styles.gradient}>
                    <Text numberOfLines={1} style={card_styles.card_title}>COME & GO</Text>
                    <Text numberOfLines={1} style={card_styles.card_text}>JUICE WRLD, MARSHMELLO</Text>
                    <MediaPlayer />
                    <Scrubber />
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const card_styles = StyleSheet.create({
    card_container: {
        paddingHorizontal: '5%',
        shadowColor: Colors.BLACK,
        shadowOpacity: 1,
        shadowRadius: 15,
        height: Window.HEIGHT * 0.82,
        marginBottom: Window.HEIGHT * 0.02,
        marginTop: Window.HEIGHT * 0.01,
    },
    card: {
        elevation: 4,
        borderRadius: 15,
        flex: 1,
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    gradient: {
        flex: 1,
        padding: '5%',
        justifyContent: 'flex-end',
    },
    card_title: {
        fontSize: 30,
        marginBottom: '-3%',
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
    card_text: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
})

export default Card;