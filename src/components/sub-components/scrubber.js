import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Scrubber = () => {
    return (
        <View style={scrubber_styles.scrubber}>
            <Slider />
        </View>
    )
}

const scrubber_styles = StyleSheet.create({
    scrubber: {

    }
})

export default Scrubber;