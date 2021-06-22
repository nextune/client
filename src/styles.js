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
        fontFamily: "Baloo2_700Bold",
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 24,
        fontFamily: "Baloo2_500Medium",
        color: "#fff",
        textTransform: 'uppercase',
    },
    sub_text: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Baloo2_400Regular",
        textTransform: 'uppercase',
    }
})