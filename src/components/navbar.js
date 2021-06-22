import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const Navbar = () => {
    return (
        <View style={navbar_styles.navbar}>
            <View style={navbar_styles.left_align}>
                <Image source={require("../../assets/imgs/nextune_logo.png")} style={navbar_styles.nextune_logo} />
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
        flex: 1,
        flexDirection: 'row',
        padding: '5%',
    },
    left_align: {
        flex: 1,
        alignItems: 'flex-start',
    },
    right_align: {
        flex: 1,
        alignItems: 'flex-end',
    },
    nextune_logo: {
        flex: 1,
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    settings_icon: {
        flex: 1,
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
})

export default Navbar;