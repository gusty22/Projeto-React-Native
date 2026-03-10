// menu/styles.js
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    menuContainer: {
        backgroundColor: themes.colors.secondary,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: themes.colors.lightGray,
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
        backgroundColor: themes.colors.lightGray,
        borderRadius: themes.metrics.borderRadius,
    },
    btnSair: {
        marginHorizontal: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: themes.colors.red,
        borderRadius: themes.metrics.borderRadius,
    },
    menuItem: {
        fontSize: 14,
        fontWeight: "bold",
        color: themes.colors.text,
    },
    menuItemSair: {
        fontSize: 14,
        fontWeight: "bold",
        color: themes.colors.white,
    }
});