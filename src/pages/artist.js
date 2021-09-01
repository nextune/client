import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, StyleSheet, View, SectionList } from 'react-native';
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
    const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

    const sections = [
        {
            data: popular,
            render: (section) => (
                <View>
                    <Text style={artist_styles.section_text}>Popular</Text>
                    <Tracklist noFooter data={section.data} />
                </View>
            )
        },
        {
            data: singles,
            render: (section) => (
                <View>
                    <Text style={artist_styles.section_text}>Singles</Text>
                    <Tracklist noNumbers footerText='View More' data={section.data} />
                </View>
            )
        },
        {
            data: albums,
            render: (section) => (
                <View>
                    <Text style={artist_styles.section_text}>Albums & EPs</Text>
                    <Carousel forceLeftAlign noIcon data={section.data} />
                </View>
            )
        },
    ]

    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle="light" translucent={true} backgroundColor={'transparent'} />
            <StickyHeader title={artist.name} subtitle={artist.listeners + ' Monthly Listeners'} art={artist.art} scroll={scroll} />
            <AnimatedSectionList
                contentContainerStyle={{ paddingTop: Window.WIDTH }}
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