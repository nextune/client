import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles';
import MediaPlayer from './sub-components/media-player';
import Scrubber from './sub-components/scrubber';

const Card = () => {
    return (
        <ImageBackground source={require("../../assets/imgs/temp_art.png")} style={card_styles.card}>
            <LinearGradient colors={['#0000', '#111111bb']} locations={[0.4, 0.6]} style={card_styles.gradient}>
                <Text style={styles.text}>COME AND GO</Text>
                <Text style={styles.sub_text}>JUICE WRLD, MARSHMELLO</Text>
                <MediaPlayer />
                <Scrubber />
            </LinearGradient>
        </ImageBackground>

    )
}

const card_styles = StyleSheet.create({
    card: {
        margin: '5%',
        borderRadius: 15,
        overflow: 'hidden',
        resizeMode: 'cover',
        flex: 20,
        elevation: 3,
    },
    gradient: {
        flex: 1,
        padding: '5%',
        justifyContent: 'flex-end',
    },
})

export default Card;