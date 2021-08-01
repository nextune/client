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
})