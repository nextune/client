import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Colors, Window } from 'globals';
import { FontAwesome5 } from '@expo/vector-icons';

const Track = (props) => {
    return (
        <ImageBackground source={props.noArt ? null : props.art} style={track_styles.track_container}>
            <View style={[track_styles.opacity, { backgroundColor: props.noArt ? 'transparent' : Colors.TRANSLUCENT }]}>
                <View style={{ width: props.noNumbers ? '0%' : '10%' }}>
                    <Text style={track_styles.track_number_text}>{props.number}</Text>
                </View>
                <View style={track_styles.track_info}>
                    <Text numberOfLines={1} style={track_styles.title_text}>{props.title}</Text>
                    <Text numberOfLines={1} style={track_styles.artist_text}>{props.artist}</Text>
                </View>
                <TouchableOpacity style={track_styles.play_icon}>
                    <FontAwesome5
                        name={"play"}
                        color={Colors.WHITE}
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const track_styles = StyleSheet.create({
    track_container: {
        height: Window.HEIGHT * 0.07,
        backgroundColor: Colors.DARKISH,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 4,
        marginTop: Window.HEIGHT * 0.005,
        marginBottom: Window.HEIGHT * 0.015,
        marginHorizontal: '3%',
    },
    opacity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '3%',
        paddingRight: '5%',
    },
    track_info: {
        flex: 1,
        paddingHorizontal: '2.5%',
    },
    play_icon: {
        width: '10%',
        alignItems: 'flex-end',
    },
    title_text: {
        fontSize: 17,
        marginBottom: '-2%',
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
    artist_text: {
        marginBottom: '1%',
        fontSize: 11,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
    track_number_text: {
        fontSize: 24,
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
        textAlign: 'center',
    },
})

export default Track;