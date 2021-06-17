import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles';
import ArtworkCover from './sub-components/artwork-cover';
import MediaPlayer from './sub-components/media-player';
import Scrubber from './sub-components/scrubber';

const Card = () => {
    return (
        <View style={[card_styles.card, card_styles.shadowCard]}>
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
        marginTop: 20,
        backgroundColor: "#333",
        borderRadius: 15,
        padding: 30,
    },
    borderCard: {
        borderWidth: 2,
        borderColor: "#cae3ea",
    },
    shadowCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5
    }
})

export default Card;