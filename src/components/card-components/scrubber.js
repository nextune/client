import styles from '../../styles';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

const Scrubber = () => {

    const [width, setWidth] = useState(0);

    const onLayout = (event) => {
        setWidth(event.nativeEvent.layout.width);
    }

    return (
        <View style={scrubber_styles.scrubber} onLayout={onLayout}>
            <MultiSlider
                sliderLength={width - 30}
                min={0}
                max={300}
                step={100}
                allowOverlap={true}
                enabledTwo={false}
                snapped={true}
                showSteps={true}
            />
        </View>
    )
}

const scrubber_styles = StyleSheet.create({
    scrubber: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '5%',
        width: '100%',
    }
})

export default Scrubber;