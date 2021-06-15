import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaying } from '../../redux/actions/media';

const icon_color = "#cae3ea";
const icon_size = 60;
const icon_size_small = 40;

const MediaPlayer = () => {
    const { isPlaying } = useSelector(state => state.mediaReducer);
    const dispatch = useDispatch();

    const onPlayPressHandler = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        dispatch(setPlaying(!isPlaying));
    }

    return (
        <View style={media_styles.media}>
            <TouchableOpacity>
                <FontAwesome5
                    name={"bars"}
                    color={icon_color}
                    size={icon_size_small}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPlayPressHandler}
            >
                <FontAwesome5
                    name={isPlaying ? "pause" : "play"}
                    color={icon_color}
                    size={icon_size}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5
                    name={"share-alt"}
                    color={icon_color}
                    size={icon_size_small}
                />
            </TouchableOpacity>
        </View >
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