import React, { useState, useEffect, useRef } from 'react';
import { Animated, StatusBar, SafeAreaView } from 'react-native';
import Tracklist from '../components/tracklist';
import { StickyHeader } from '../components/sticky-header';
import Styles from '../styles';

const Album = () => {

    const scroll = useRef(new Animated.Value(0)).current;
    const ref = useRef(null);

    const [tracks, setTracks] = useState();
    const [tracksLoaded, setTracksLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://nextune.herokuapp.com/tracks/test');
            let json = await response.json();
            setTracks(json.data);
            setTracksLoaded(true);
        }
        fetchData();
    }, []);

    const album = {
        title: "Legends Never Die",
        artist: "Juice WRLD",
        art: require("../../assets/imgs/legends_never_die.png"),
        year: "2020",
    }

    if (!tracksLoaded) {
        return <SafeAreaView style={Styles.body} />;
    }
    else {
        return (
            <SafeAreaView style={Styles.body}>
                <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
                <StickyHeader navigate title={album.title} subtitle={album.artist + ' (' + album.year + ')'} art={album.art} scroll={scroll} />
                <Tracklist scroll={scroll} ref={ref} data={tracks} />
            </SafeAreaView>
        )
    }
}

export default Album;