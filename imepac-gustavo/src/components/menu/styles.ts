import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    menuContainer: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
        width: '100%',
        marginTop: 40,
        elevation: 3,
    },
    scrollContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    btn: {
        marginHorizontal: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#F7FAFC',
        borderRadius: 8,
    },
    btnSair: {
        marginHorizontal: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#FED7D7',
        borderRadius: 8,
    },
    menuItem: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#2D3748',
    },
    menuItemSair: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#C53030',
    }
});