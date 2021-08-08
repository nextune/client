import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, useWindowDimensions } from 'react-native';
import Styles from '../styles';

const Navbar = () => {
    const window = useWindowDimensions();
    return (
        <View style={navbar_styles().navbar}>
            <View style={navbar_styles().left_align}>
                <Text numberOfLines={1} style={Styles.title}>Alex's Flow</Text>
            </View>
            <View style={navbar_styles().right_align}>
                <TouchableOpacity>
                    <Image style={navbar_styles().icon} source={require("../../assets/imgs/settings_icon.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const navbar_styles = () => {
    const window = useWindowDimensions();
    return (
        StyleSheet.create({
            navbar: {
                flexDirection: 'row',
                height: window.height * 0.05,
                paddingHorizontal: window.width * 0.07,
                paddingVertical: window.width * 0.01,
                marginTop: window.width * 0.04,
            },
            left_align: {
                width: window.width * 0.7,
                marginBottom: '-1%',
                alignItems: 'flex-start',
                justifyContent: 'center',
            },
            right_align: {
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end'
            },
            icon: {
                height: '90%',
                aspectRatio: 1,
            },
        })
    )
}

export default Navbar;