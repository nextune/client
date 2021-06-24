import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from '../styles';
import MediaPlayer from './sub-components/media-player';
import Scrubber from './sub-components/scrubber';
import { Colors } from '../globals';

const Card = () => {
    return (
        <View style={card_styles.card_container}>
            <ImageBackground source={require("../../assets/imgs/temp_art.png")} style={card_styles.card}>
                <LinearGradient colors={['transparent', Colors.TRANSLUCENT]} locations={[0.4, 0.6]} style={card_styles.gradient}>
                    <Text style={Styles.card_title}>COME & GO</Text>
                    <Text style={Styles.card_text}>JUICE WRLD, MARSHMELLO</Text>
                    <MediaPlayer />
                    <Scrubber />
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const card_styles = StyleSheet.create({
    card_container: {
        flex: 1,
        marginVertical: '5%',
        elevation: 3,
        shadowColor: Colors.BLACK,
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    card: {
        borderRadius: 15,
        overflow: 'hidden',
        height: '100%',
        resizeMode: 'cover',
    },
    gradient: {
        flex: 1,
        padding: '5%',
        justifyContent: 'flex-end',
    },
})

export default Card;