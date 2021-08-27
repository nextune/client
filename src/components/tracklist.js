import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Track from 'components/track';
import { Colors, Window } from 'globals';

const Tracklist = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Track title={item.title} artist={item.artist} art={item.art} number={index + 1} noArt={props.noArt} noNumbers={props.noNumbers} />
            )}
            ItemSeparatorComponent={() => (
                <View style={tracklist_styles.separator} />
            )}
            ListFooterComponent={() => ( props.noFooter ? <View style={tracklist_styles.no_footer} /> :
                <View>
                    <View style={tracklist_styles.footer}>
                        <Text style={tracklist_styles.footer_text}>{props.footerText}</Text>
                    </View>
                </View>
            )}
        />
    )
}

const tracklist_styles = StyleSheet.create({
    no_footer: {
        height: Window.HEIGHT * 0.01,
    },
    footer: {
        height: Window.HEIGHT * 0.035,
        justifyContent: 'flex-start',
    },
    footer_text: {
        fontSize: 11,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
        textAlign: 'center',
    },
})

export default Tracklist;