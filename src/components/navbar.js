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
                <TouchableOpacity>
                    <Image source={require("../../assets/imgs/settings_icon.png")} style={navbar_styles.navbar_icon_right} />
                </TouchableOpacity>
                <TouchableOpacity style={[navbar_styles.navbar_icon_right, navbar_styles.fa_offset]}>
                    <FontAwesome5
                        name={"pen"}
                        color={"#cae3ea"}
                        size={25}
                    />
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
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
    },
    navbar_icon_right: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        marginLeft: 15
    },
    fa_offset: {
        marginTop: 4,
    }
})

export default Navbar;