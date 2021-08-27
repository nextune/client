import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaying } from 'redux/actions/media';

const icon_color = "#fff";
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
                <Image source={require("../../../assets/imgs/add_to_playlist.png")} style={media_styles.add_to_playlist} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlayPressHandler}>
                <FontAwesome5
                    name={isPlaying ? "pause" : "play"}
                    color={icon_color}
                    size={icon_size}
                    style={media_styles.play_pause}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5
                    name={"share"}
                    color={icon_color}
                    size={icon_size_small}
                />
            </TouchableOpacity>
        </View>
    )
}

const media_styles = StyleSheet.create({
    media: {
        height: '10%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: '10%',
    },
    add_to_playlist: {
        marginTop: '15%',
        aspectRatio: 1,
        height: '70%',
    },
    play_pause: {
        marginRight: '2%'
    },
})

export default MediaPlayer;