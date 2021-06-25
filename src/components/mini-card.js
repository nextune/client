import React from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import Styles from '../styles';
import { Colors } from '../globals';
import { FontAwesome5 } from '@expo/vector-icons';

const Card = (props) => {
    return (
        <View style={minicard_styles.card_container}>
            <ImageBackground source={props.album_art} style={minicard_styles.card}>
                <View style={minicard_styles.dark_overlay}>
                    <View style={minicard_styles.track_info}>
                        <Text numberOfLines={1} style={Styles.minicard_title}>{props.title}</Text>
                        <Text numberOfLines={1} style={Styles.minicard_text}>{props.artist}</Text>
                    </View>
                    <TouchableOpacity
                        style={minicard_styles.play_icon}
                    >
                        <FontAwesome5
                            name={"play"}
                            color={Colors.WHITE}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const minicard_styles = StyleSheet.create({
    card_container: {
        flex: 1,
        marginVertical: '2%',
        elevation: 3,
        shadowColor: Colors.BLACK,
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    card: {
        borderRadius: 15,
        overflow: 'hidden',
        flex: 1,
        resizeMode: 'cover',
    },
    dark_overlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.TRANSLUCENT,
        padding: '5%',
        alignItems: 'center',
    },
    track_info: {
        flex: 4,
    },
    play_icon: {
        alignItems: 'flex-end',
        flex: 1,
    },
})

export default Card;