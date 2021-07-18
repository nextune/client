import React from 'react';
import { StyleSheet, Text, ImageBackground, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from '../styles';
import MediaPlayer from './card-components/media-player';
import Scrubber from './card-components/scrubber';
import { Colors } from '../colors';

const Card = () => {
    return (
        <View style={card_styles().card_container}>
            <ImageBackground source={require("../../assets/imgs/legends_never_die.png")} style={card_styles().card}>
                <LinearGradient colors={['transparent', Colors.TRANSLUCENT]} locations={[0.4, 0.6]} style={card_styles().gradient}>
                    <Text numberOfLines={1} style={Styles.card_title}>COME & GO</Text>
                    <Text numberOfLines={1} style={Styles.card_text}>JUICE WRLD, MARSHMELLO</Text>
                    <MediaPlayer />
                    <Scrubber />
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const card_styles = () => {
    const window = useWindowDimensions(); 
    return (
        StyleSheet.create({
            card_container: {
                paddingHorizontal: '5%',
                shadowColor: Colors.BLACK,
                shadowOpacity: 1,
                shadowRadius: 15,
                height: window.height * 0.82,
                marginBottom: window.height * 0.02,
                marginTop: window.height * 0.01,
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
        })
    )
}

export default Card;