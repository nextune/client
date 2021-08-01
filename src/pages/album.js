import React from 'react';
import { StatusBar, FlatList, StyleSheet, View, useWindowDimensions, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Track from '../components/track';
import Styles from '../styles';
import { Colors } from '../colors';

const Album = () => {

    const album = {
        title: "Legends Never Die",
        artist: "Juice WRLD",
        art: require("../../assets/imgs/legends_never_die.png"),
        year: "2020",
    }

    const tracks = [
        { title: "Anxiety - Intro", artist: "Juice WRLD" },
        { title: "Conversations", artist: "Juice WRLD" },
        { title: "Titanic", artist: "Juice WRLD" },
        { title: "Bad Energy", artist: "Juice WRLD" },
        { title: "Righteous", artist: "Juice WRLD" },
        { title: "Blood On My Jeans", artist: "Juice WRLD" },
        { title: "Smile", artist: "Juice WRLD, The Weeknd" },
        { title: "Tell Me U Luv Me", artist: "Juice WRLD, Trippie Redd" },
        { title: "Hate The Other Side", artist: "Juice WRLD, Marshmello, The Kid Laroi, Polo G" },
        { title: "Get Through It - Interlude", artist: "Juice WRLD" },
        { title: "Life's A Mess", artist: "Juice WRLD, Halsey" },
        { title: "Come & Go", artist: "Juice WRLD, Marshmello" },
        { title: "I Want It", artist: "Juice WRLD" },
        { title: "Fighting Demons", artist: "Juice WRLD" },
        { title: "Wishing Well", artist: "Juice WRLD" },
        { title: "Screw Juice", artist: "Juice WRLD" },
        { title: "Up Up And Away", artist: "Juice WRLD" },
        { title: "The Man, The Myth, The Legend - Interlude", artist: "Juice WRLD" },
        { title: "Stay High", artist: "Juice WRLD" },
        { title: "Can't Die", artist: "Juice WRLD" },
        { title: "Man Of The Year", artist: "Juice WRLD" },
        { title: "Juice WRLD Speaks From Heaven - Outro", artist: "Juice WRLD" },
    ]

    const AlbumHeader = (props) => (
        <ImageBackground source={props.art} style={album_styles().header}>
            <LinearGradient colors={[Colors.TRANSLUCENT, Colors.TRANSLUCENTISH, 'transparent']} style={album_styles().statusbar_gradient} />
            <LinearGradient colors={['transparent', Colors.TRANSLUCENTISH, Colors.DARK]} style={album_styles().gradient}>
                <Text numberOfLines={1} style={album_styles().header_title}>{props.title}</Text>
                <Text numberOfLines={1} style={album_styles().header_text}>{props.artist} ({props.year})</Text>
            </LinearGradient>
        </ImageBackground>
    )

    return (
        <View style={Styles.body}>
            <StatusBar barStyle="auto" translucent={true} backgroundColor="transparent" />
            <FlatList
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                data={tracks}
                keyExtractor={(tracks, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Track title={item.title} artist={item.artist} art={album.art} number={index + 1} />
                )}
                ListHeaderComponent={() => (
                    <AlbumHeader title={album.title} artist={album.artist} art={album.art} year={album.year} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={album_styles().separator} />
                )}
                ListFooterComponent={() => (
                    <View>
                        <View style={album_styles().separator} />
                        <View style={album_styles().footer}>
                            <Text style={album_styles().footer_text}>Looks like you've reached the end :)</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const album_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            header: {
                aspectRatio: 1,
                width: '100%',
                marginBottom: window.height * 0.0125,
                resizeMode: 'cover',
            },
            header_title: {
                fontSize: 26,
                marginBottom: '-2%',
                color: Colors.WHITE,
                fontFamily: "Baloo2_700Bold",
                textTransform: 'uppercase',
            },
            header_text: {
                fontSize: 14,
                color: Colors.WHITE,
                fontFamily: "Baloo2_500Medium",
                textTransform: 'uppercase',
            },
            gradient: {
                flex: 1,
                paddingHorizontal: '6%',
                paddingBottom: '10%',
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
            statusbar_gradient: {
                height: '20%',
            },
            separator: {
                backgroundColor: Colors.DARKISH,
                height: 1,
            },
            footer: {
                height: window.height * 0.05,
                justifyContent: 'center',
            },
            footer_text: {
                fontSize: 10,
                color: Colors.LIGHT,
                fontFamily: "Baloo2_400Regular",
                textTransform: 'uppercase',
                textAlign: 'center',
            },
        })
    )
}

export default Album;