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
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: themes.colors.text,
        marginTop: 10,
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 35,
        justifyContent: 'center',
    },
    labelInput: {
        fontSize: 14,
        color: '#4A5568',
        marginBottom: 8,
        marginLeft: 15,
        fontWeight: '600',
    },
    boxInputContainer: {
        width: '100%',
        height: 55,
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Garante o texto de um lado e o ícone do outro
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    input: {
        height: '100%',
        width: '85%',
        paddingLeft: 10,
        color: themes.colors.text,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 25,
    },
    forgotPasswordText: {
        color: themes.colors.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: themes.colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: themes.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: themes.colors.secondary,
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
        color: '#718096',
        fontSize: 14,
    },
    footerLink: {
        fontWeight: 'bold',
        color: themes.colors.primary,
    }
});