import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ddd",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        width: '100%',
        marginTop: 40, // Espaço para não ficar colado na barra de status do celular
    },
    menuItem: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#333',
    }
});