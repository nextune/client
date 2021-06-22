import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "#111111",
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    centered: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        lineHeight: 24,
        height: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        fontFamily: "Baloo2_500Medium",
    },
    title: {
        fontSize: 32,
        fontFamily: "Baloo2_700Bold",
        color: "#fff",
    },
    sub_text: {
        color: "#fff",
        fontFamily: "Baloo2_400Regular",
        fontSize: 17,
        height: 17,
        lineHeight: 20
    },
    sub_text: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Baloo2_400Regular",
    }
})