import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Styles from '../styles';

const Navbar = () => {
    return (
        <View style={navbar_styles.navbar}>
            <View style={navbar_styles.left_align}>
                <Text style={Styles.title}>Rahul's Flow</Text>
            </View>
            <View style={navbar_styles.right_align}>
                <TouchableOpacity>
                    <Image source={require("../../assets/imgs/settings_icon.png")} style={navbar_styles.settings_icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const navbar_styles = StyleSheet.create({
    navbar: {
        height: '4.5%',
        flexDirection: 'row',
    },
    left_align: {
        width: '80%',
        paddingTop: "1.5%",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    right_align: {
        width: '20%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    settings_icon: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
})

export default Navbar;