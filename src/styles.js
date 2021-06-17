import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "#111111",
        flex: 1,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    centered: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        height: 20,
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
    apply_border: { //for development purposes only
        borderWidth: 2,
        borderColor: "#cea",
    }
})