import React from 'react';
import { StyleSheet, View, useWindowDimensions, ImageBackground, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../colors';
import Styles from '../styles';

const MoreInfo = () => {

    const window = useWindowDimensions();

    const artists = [
        { type: 'artist', name: 'Marshmello', image: require("../../assets/imgs/marshmello.jpg") },
        { type: 'artist', name: 'Juice WRLD', image: require("../../assets/imgs/juice_wrld.jpg") },
        { type: 'album', name: 'Legends Never Die', image: require("../../assets/imgs/legends_never_die.png") },
    ]

    const getIcon = (iconType) => iconType == 'album' ? require("../../assets/imgs/album_icon.png") : require("../../assets/imgs/artist_icon.png")

    const Tile = ({ name, image, type }) => (
        <TouchableOpacity>
            <ImageBackground source={image} style={moreinfo_styles().tile}>
                <Image source={getIcon(type)} style={moreinfo_styles().icon} />
                <LinearGradient colors={['transparent', Colors.TRANSLUCENT]} style={moreinfo_styles().gradient}>
                    <Text numberOfLines={2} style={Styles.tile}>{name}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <View style={moreinfo_styles().container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
                snapToInterval={window.width*0.36}
                decelerationRate='fast'
                data={artists}
                keyExtractor={(artist, index) => index.toString()}
                renderItem={({ item, }) => (
                    <Tile type={item.type} name={item.name} image={item.image} />
                )}
                ListHeaderComponent={() => (
                    <View style={moreinfo_styles().carousel_padding} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={moreinfo_styles().carousel_separator} />
                )}
                ListFooterComponent={() => (
                    <View style={moreinfo_styles().carousel_padding} />
                )}
            />
        </View>
    )
}

const moreinfo_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            container: {
                height: window.width * 0.32,
                marginBottom: window.height * 0.03,
            },
            tile: {
                aspectRatio: 1,
                borderRadius: 15,
                height: '100%',
                overflow: 'hidden',
                resizeMode: 'cover',
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
            carousel_separator: {
                width: window.width * 0.04,
            },
            carousel_padding: {
                width: window.width * 0.16,
            },
        })
    )
}

export default MoreInfo;