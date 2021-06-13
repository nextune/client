import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const icon_size = 35;
const icon_color = "#cae3ea";

const Navbar = () => {
    return (
        <View style={navbar_styles.navbar}>
            <View style={navbar_styles.align_left}>
                <TouchableOpacity>
                    <FontAwesome5
                        name={"hammer"}
                        color={icon_color}
                        size={icon_size}
                    />
                </TouchableOpacity>
            </View>
            <View style={navbar_styles.align_right}>
                <TouchableOpacity>
                    <FontAwesome5
                        name="cog"
                        color={icon_color}
                        size={icon_size}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5
                        style={navbar_styles.right_icon}
                        name="heart"
                        color={icon_color}
                        size={icon_size}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5
                        style={navbar_styles.right_icon}
                        name="music"
                        color={icon_color}
                        size={icon_size}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const navbar_styles = StyleSheet.create({
    navbar: {
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
    },
    align_right: {
        flexGrow: 1,
        marginRight: 10,
        flexDirection: "row-reverse",
    },
    right_icon: {
        marginRight: 20,
    }
})

export default Navbar;