import React, { useRef } from 'react';
import { Animated, StatusBar, SafeAreaView } from 'react-native';
import Tracklist from '../components/tracklist';
import { StickyHeader } from '../components/sticky-header';
import Styles from '../styles';

const Album = () => {

    const scroll = useRef(new Animated.Value(0)).current;
    const ref = useRef(null);

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

    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
            <StickyHeader navigate title={album.title} subtitle={album.artist + ' (' + album.year + ')'} art={album.art} scroll={scroll} />
            <Tracklist scroll={scroll} ref={ref} data={tracks} />
        </SafeAreaView>
    )
}

export default Album;