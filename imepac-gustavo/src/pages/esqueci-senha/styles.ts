import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: height * 0.3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3748',
        marginTop: 20,
    },
    description: {
        fontSize: 14,
        color: '#718096',
        textAlign: 'center',
        paddingHorizontal: 40,
        marginTop: 10,
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 35,
        marginTop: 30,
    },
    labelInput: {
        fontSize: 14,
        color: '#4A5568',
        marginBottom: 8,
        marginLeft: 15,
        fontWeight: '600',
    },
    boxInput: {
        width: '100%',
        height: 55,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        color: '#2D3748',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#3182CE',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#3182CE',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxBottom: {
        marginTop: 30,
    },
    footerLink: {
        fontWeight: 'bold',
        color: '#3182CE',
        fontSize: 14,
    }
});