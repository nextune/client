import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Tile from 'components/tile';
import { Window } from 'globals';

const tileWidth = Window.WIDTH * 0.36;
const separatorWidth = Window.WIDTH * 0.04;

const Carousel = (props) => {

    return (
        <View style={carousel_styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
                data={props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Tile noIcon={props.noIcon} type={item.type} name={item.name} image={item.image} />
                )}
                ListHeaderComponent={() => (
                    <View style={{ width: props.forceLeftAlign ? Window.WIDTH * 0.03 :
                        props.data.length < 3 ? (Window.WIDTH - (tileWidth * props.data.length) - (separatorWidth * (props.data.length - 1)))/2 :
                        Window.WIDTH * 0.05
                    }} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={carousel_styles.carousel_separator} />
                )}
                ListFooterComponent={() => (
                    <View style={{ width: props.data.length < 3 ?
                        (Window.WIDTH - (tileWidth * props.data.length) - (separatorWidth * (props.data.length - 1)))/2 :
                        Window.WIDTH * 0.05
                    }} />
                )}
            />
        </View>
    )
}

const carousel_styles = StyleSheet.create({
    container: {
        height: tileWidth,
        marginTop: Window.HEIGHT * 0.005,
        marginBottom: Window.HEIGHT * 0.03,
    },
    carousel_separator: {
        width: separatorWidth,
    },
})

export default Carousel;