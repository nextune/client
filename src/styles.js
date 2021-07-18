import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export default StyleSheet.create({
    body: {
        backgroundColor: Colors.DARK,
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 10,
        color: Colors.LIGHT,
        fontFamily: "Baloo2_500Medium",
        textTransform: 'uppercase',
    },
    card_title: {
        fontSize: 30,
        marginBottom: '-3%',
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
    card_text: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
    minicard_title: {
        fontSize: 20,
        color: Colors.WHITE,
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
    minicard_text: {
        fontSize: 12,
        color: Colors.WHITE,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
    tile: {
        fontSize: 11,
        lineHeight: 16,
        textAlign: 'center',
        color: Colors.WHITE,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    },
})