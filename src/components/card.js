import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles';
import ArtworkCover from './sub-components/artwork-cover';
import MediaPlayer from './sub-components/media-player';
import Scrubber from './sub-components/scrubber';

const Card = () => {
    return (
        <View style={card_styles.card}>
            <ArtworkCover />
            <Text style={styles.text}>Come and Go</Text>
            <Text style={styles.sub_text}>Juice Wrld</Text>
            <MediaPlayer />
            <Scrubber />
        </View>
    )
}

const card_styles = StyleSheet.create({
    card: {
        marginTop: 30,
        borderWidth: 3,
        borderColor: "#cae3ea",
        borderRadius: 15,
        padding: 30,
    }
})

export default Card;