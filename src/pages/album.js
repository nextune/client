import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, SectionList } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Tracklist from 'components/tracklist';
import StickyHeader from 'components/sticky-header';
import Loading from 'pages/loading';
import Styles from 'styles';
import { Window } from 'globals';
import { album, tracklist } from 'data';
import { scrollHandler } from 'animations';

const Album = () => {

    const scroll = useSharedValue(0);
    const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

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
            <AnimatedSectionList
                contentContainerStyle={{ paddingTop: Window.WIDTH * 1.05 }}
                snapToOffsets={[0, Window.WIDTH * 0.64]}
                snapToEnd={false}
                onScroll={scrollHandler(scroll)}
                scrollEventThrottle={16}
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