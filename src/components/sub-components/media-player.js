import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const icon_color = "#cae3ea";
const icon_size = 60;
const icon_size_small = 40;

const MediaPlayer = () => {
    return (
        <View style={media_styles.media}>
            <FontAwesome5
                name={"bars"}
                color={icon_color}
                size={icon_size_small}
            />
            <FontAwesome5
                name={"play"}
                color={icon_color}
                size={icon_size}
            />
            <FontAwesome5
                name={"share-alt"}
                color={icon_color}
                size={icon_size_small}
            />
        </View>
    )
}

const media_styles = StyleSheet.create({
    media: {
        flexDirection: "row",
        marginVertical: 30,
        justifyContent: "space-around",
        alignItems: "center",
    }
})

export default MediaPlayer;