import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ArtworkCover = () => {
    return (
        <View style={artwork_styles.artwork}>
            <Image source={require("../../../assets/imgs/temp_art.png")} />
        </View>
    )
}

const artwork_styles = StyleSheet.create({
    artwork: {
        marginBottom: 30,
    }
})

export default ArtworkCover;