// login/styles.js
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { height } = Dimensions.get("window");

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bgScreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: height * 0.35,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
        tintColor: themes.colors.primary,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: themes.colors.text,
        marginTop: 10,
        letterSpacing: 1,
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 35,
        justifyContent: 'center',
    },
    labelInput: {
        fontSize: 14,
        color: themes.colors.gray,
        marginBottom: 8,
        marginLeft: 4,
        fontWeight: '500',
    },
    boxInputContainer: {
        width: '100%',
        height: themes.metrics.inputHeight,
        backgroundColor: themes.colors.secondary,
        borderRadius: themes.metrics.borderRadius,
        paddingHorizontal: 15,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
    },
    input: {
        height: '100%',
        width: '85%',
        paddingLeft: 5,
        color: themes.colors.text,
        fontSize: 16,
    },
    textError: {
        color: themes.colors.red,
        fontSize: 12,
        marginLeft: 4,
        marginBottom: 12,
        fontWeight: '500'
    },
    button: {
        width: '100%',
        height: themes.metrics.inputHeight,
        backgroundColor: themes.colors.primary,
        borderRadius: themes.metrics.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: themes.colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxBottom: {
        height: height * 0.15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: themes.colors.textDark,
        fontSize: 15,
    },
    footerLink: {
        fontWeight: 'bold',
        color: themes.colors.primary,
    }
});