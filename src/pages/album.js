import React, { useState, useEffect, useRef } from 'react';
import { Animated, StatusBar, SafeAreaView, SectionList } from 'react-native';
import Tracklist from 'components/tracklist';
import { StickyHeader, scrollHandler } from 'components/sticky-header';
import Loading from 'pages/loading';
import Styles from 'styles';
import { Window } from 'globals';
import { album, tracklist } from 'data';

const Album = () => {

    const scroll = useRef(new Animated.Value(0)).current;

    // const [tracks, setTracks] = useState();
    // const [tracksLoaded, setTracksLoaded] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let response = await fetch('https://nextune.herokuapp.com/tracks/test');
    //         let json = await response.json();
    //         setTracks(json.data);
    //         setTracksLoaded(true);
    //     }
    //     fetchData();
    // }, []);

    const sections = [
        {
            data: tracklist,
            render: (section) => (
                <Tracklist noArt footerText={'Listening Time: ' + album.duration} data={section.data} />
            )
        },
    ]

    // if (!tracksLoaded) {
    //     return <Loading />;
    // }
    // else {
        return (
            <SafeAreaView style={Styles.body}>
                <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
                <StickyHeader navigate title={album.title} subtitle={album.artist + ' (' + album.year + ')'} art={album.art} scroll={scroll} />
                <SectionList
                    contentContainerStyle={{ paddingTop: Window.WIDTH * 1.05 }}
                    snapToOffsets={[0, Window.WIDTH * 0.64]}
                    snapToEnd={false}
                    decelerationRate={scroll < Window.WIDTH * 0.64 ? 'fast' : 'normal'}
                    onScroll={scrollHandler(scroll)}
                    fadingEdgeLength={100}
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    sections={sections}
                    keyExtractor={(sections, index) => index.toString()}
                    renderItem={() => (<></>)}
                    renderSectionHeader={({ section }) => (
                        section.render(section)
                    )}
                />
            </SafeAreaView>
        )
    // }
}

export default Album;