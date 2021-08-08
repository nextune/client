import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Colors } from '../colors';
import { FontAwesome5 } from '@expo/vector-icons';

const Track = (props) => {
    return (
        <View style={track_styles().track_container}>
            <View style={track_styles().track_number}>
                <Text style={track_styles().track_number_text}>{props.number}</Text>
            </View>
            <View style={track_styles().track_info}>
                <Text numberOfLines={1} style={track_styles().title_text}>{props.title}</Text>
                <Text numberOfLines={1} style={track_styles().artist_text}>{props.artist}</Text>
            </View>
            <TouchableOpacity
                style={track_styles().play_icon}
            >
                <FontAwesome5
                    style={{ alignSelf: 'center' }}
                    name={"play"}
                    color={Colors.WHITE}
                    size={24}
                />
            </TouchableOpacity>
        </View>
    )
}

const track_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            track_container: {
                height: window.height * 0.055,
                flexDirection: 'row',
                paddingVertical: '5%',
                paddingHorizontal: '3%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginVertical: window.height * 0.0125
            },
            track_number: {
                width: '10%',
            },
            track_info: {
                width: '68.5%',
                marginHorizontal: '3%',
            },
            play_icon: {
                width: '20%',
            },
            title_text: {
                fontSize: 17,
                marginBottom: '-2%',
                color: Colors.WHITE,
                fontFamily: "Baloo2_700Bold",
                textTransform: 'uppercase',
            },
            artist_text: {
                fontSize: 11,
                color: Colors.LIGHT,
                fontFamily: "Baloo2_400Regular",
                textTransform: 'uppercase',
            },
            track_number_text: {
                fontSize: 24,
                marginBottom: '-10%',
                color: Colors.WHITE,
                fontFamily: "Baloo2_700Bold",
                textTransform: 'uppercase',
                textAlign: 'center',
            },
        })
    )
}

export default Track;