import React from 'react';
import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text } from 'react-native';
import MiniCard from '../components/mini-card'
import Styles from '../styles';
import { Colors } from '../globals';

const Related = () => {

    const RELATED_TRACKS = [
        {
            type: 'artist',
            title: 'Juice WRLD',
            data: [
                {
                    title: 'Lucid Dreams',
                    artist: 'Juice WRLD',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
                {
                    title: 'Wishing Well',
                    artist: 'Juice WRLD',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
                {
                    title: 'Bandit',
                    artist: 'Juice WRLD, YoungBoy Never Broke Again',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
                {
                    title: 'All Girls Are The Same',
                    artist: 'Juice WRLD',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
            ],
        },
        {
            type: 'album',
            title: 'Legends Never Die',
            data: [
                {
                    title: 'Righteous',
                    artist: 'Juice WRLD',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
                {
                    title: 'Hate The Other Side',
                    artist: 'Juice WRLD, Marshmello, The Kid Laroi, Polo G',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
                {
                    title: 'Tell Me U Luv Me',
                    artist: 'Juice WRLD, Trippie Redd',
                    album_art: require("../../assets/imgs/temp_art.png"),
                },
            ],
        },
    ]

    return (
        < SafeAreaView style={Styles.body} >
            <StatusBar barStyle="light-content" backgroundColor={Colors.DARK} />
            <SectionList
                sections={RELATED_TRACKS}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => 
                        <MiniCard title={item.title} artist={item.artist} album_art={item.album_art} />
                }
                renderSectionHeader={({ section }) => (
                        <Text style={Styles.card_title}>{section.title}</Text>
                )}
                showsVerticalScrollIndicator={false}
                overScrollMode={'never'}
            />
        </SafeAreaView >
    )
}

export default Related;