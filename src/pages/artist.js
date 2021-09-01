import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Tracklist from 'components/tracklist';
import StickyHeader from 'components/sticky-header';
import Carousel from 'components/carousel';
import { Colors, Window } from 'globals';
import Styles from 'styles';
import { artist, popular, singles, albums } from 'data';
import { scrollHandler } from 'animations';

const Artist = () => {

    const scroll = useSharedValue(0);

    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
            <StickyHeader title={artist.name} subtitle={artist.listeners + ' Monthly Listeners'} art={artist.art} scroll={scroll} />
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: Window.WIDTH }}
                snapToOffsets={[0, Window.WIDTH * 0.64]}
                snapToEnd={false}
                onScroll={scrollHandler(scroll)}
                fadingEdgeLength={100}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
            >
                <Text style={artist_styles.section_text}>Popular</Text>
                <Tracklist noFooter data={popular} />
                <Text style={artist_styles.section_text}>Singles</Text>
                <Tracklist noNumbers footerText='View More' data={singles} />
                <Text style={artist_styles.section_text}>Albums & EPs</Text>
                <Carousel forceLeftAlign noIcon data={albums} />
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const artist_styles = StyleSheet.create({
    section_text: {
        fontSize: 20,
        marginTop: Window.HEIGHT * 0.015,
        marginHorizontal: '3%',
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
})

export default Artist;