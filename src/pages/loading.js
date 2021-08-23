import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors } from 'globals';
import Styles from 'styles';

const Loading = () => {
    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar barStyle="light" translucent={true} backgroundColor={Colors.DARK} />
        </SafeAreaView>
    )
}

export default Loading;