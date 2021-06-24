import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Styles from '../styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Navbar = () => {
    return (
        <View style={navbar_styles.navbar}>
            <View style={navbar_styles.left_align}>
                <Text style={Styles.title}>Rahul's Flow</Text>
                {/* <Image source={require("../../assets/imgs/nextune_logo.png")} style={navbar_styles.navbar_icon} /> */}
            </View>
            <View style={navbar_styles.right_align}>
                <TouchableOpacity style={navbar_styles.navbar_icon_right}>
                    <FontAwesome5
                        name={"pen"}
                        color={"#cae3ea"}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={navbar_styles.navbar_icon_right}>
                    <Image style={{ height: '50%', aspectRatio: 1, }} source={require("../../assets/imgs/settings_icon.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const navbar_styles = StyleSheet.create({
    navbar: {
        flex: 2,
        flexDirection: 'row',
        padding: 5,
    },
    left_align: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    right_align: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navbar_icon_right: {
        marginLeft: 15,
    }
})

export default Navbar;