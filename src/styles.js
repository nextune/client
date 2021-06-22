import { StyleSheet } from 'react-native';
import { Colors } from './globals';

export default StyleSheet.create({
    body: {
        backgroundColor: "#111111",
        padding: '5%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
        fontSize: 32,
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
        fontSize: 24,
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
})