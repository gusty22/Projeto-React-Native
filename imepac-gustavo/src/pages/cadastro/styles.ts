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
        height: height * 0.25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 35,
        justifyContent: 'center',
    },
    labelInput: {
        fontSize: 14,
        color: '#4A5568',
        marginBottom: 5,
        marginLeft: 15,
        fontWeight: '600',
    },
    boxInputContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Mantém o texto na esquerda e o ícone na direita
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    input: {
        height: '100%',
        width: '85%', // Deixa espaço para o ícone
        color: '#2D3748',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#3182CE',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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
        height: height * 0.10,
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
        color: '#3182CE',
    }
});