import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Colors, Window } from '../globals';

const Navbar = () => {
    return (
        <View style={navbar_styles.navbar}>
            <View style={navbar_styles.left_align}>
                <Text numberOfLines={1} style={navbar_styles.text}>Alex's Flow</Text>
            </View>
            <View style={navbar_styles.right_align}>
                <TouchableOpacity>
                    <Image style={navbar_styles.icon} source={require("../../assets/imgs/settings_icon.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const navbar_styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        height: Window.HEIGHT * 0.05,
        paddingHorizontal: Window.WIDTH * 0.07,
        paddingVertical: Window.WIDTH * 0.01,
        marginTop: Window.WIDTH * 0.04,
    },
    left_align: {
        width: Window.WIDTH * 0.7,
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
    text: {
        fontSize: 24,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
    },
})

export default Navbar;