import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Track from '../components/track';
import { scrollHandler, snapHandler } from '../components/sticky-header';
import { Colors, Window } from '../globals';

const Tracklist = React.forwardRef((props, ref) => {
    return (
        <FlatList
            contentContainerStyle={{ paddingTop: Window.WIDTH }}
            onMomentumScrollEnd={snapHandler.bind(this, ref)}
            onScroll={scrollHandler(props.scroll)}
            fadingEdgeLength={100}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            ref={ref}
            data={props.data}
            keyExtractor={(tracks, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Track title={item.title} artist={item.artist} number={index + 1} />
            )}
            ItemSeparatorComponent={() => (
                <View style={tracklist_styles.separator} />
            )}
            ListFooterComponent={() => (
                <View>
                    <View style={tracklist_styles.separator} />
                    <View style={tracklist_styles.footer}>
                        <Text style={tracklist_styles.footer_text}>Looks like you've reached the end :)</Text>
                    </View>
                </View>
            )}
        />
    )
})

const tracklist_styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.DARKISH,
        height: 1,
    },
    footer: {
        height: Window.HEIGHT * 0.05,
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

export default Tracklist;