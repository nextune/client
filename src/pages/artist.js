import React, { useRef, useState } from 'react';
import { Animated, StatusBar, SafeAreaView, SectionList, Text, View, StyleSheet } from 'react-native';
import Tracklist from 'components/tracklist';
import { StickyHeader, scrollHandler } from 'components/sticky-header';
import Carousel from 'components/carousel';
import { Colors, Window } from 'globals';
import Styles from 'styles';
import { artist, popular, singles, albums } from 'data';

const Artist = () => {

    const scroll = useRef(new Animated.Value(0)).current;

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
            <SectionList
                contentContainerStyle={{ paddingTop: Window.WIDTH }}
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