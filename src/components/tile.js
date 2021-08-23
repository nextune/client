import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'globals';
import { useNavigation } from '@react-navigation/native';

const Tile = (props) => {
    
    const navigation = useNavigation();
    const getIcon = () => props.type == 'Album' ? require("../../assets/imgs/album_icon.png") : require("../../assets/imgs/artist_icon.png");

    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.type)}>
            <ImageBackground source={props.image} style={tile_styles.tile}>
                <Image source={props.noIcon ? null : getIcon()} style={tile_styles.icon} />
                <LinearGradient colors={['transparent', Colors.TRANSLUCENTISH,Colors.TRANSLUCENT]} locations={[0, 0.2, 1]} style={tile_styles.gradient}>
                    <Text numberOfLines={2} style={tile_styles.tile_text}>{props.name}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const tile_styles = StyleSheet.create({
    tile: {
        aspectRatio: 1,
        borderRadius: 15,
        height: '100%',
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    tile_text: {
        fontSize: 11,
        lineHeight: 16,
        textAlign: 'center',
        color: Colors.WHITE,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
    icon: {
        height: '40%',
        aspectRatio: 1,
    },
    gradient: {
        flex: 1,
        paddingHorizontal: '6%',
        paddingVertical: '4%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default Tile;