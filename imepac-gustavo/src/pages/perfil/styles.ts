// perfil/styles.js
import { StyleSheet } from 'react-native';
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: themes.colors.bgScreen },
    content: { padding: 25, alignItems: 'center' },
    avatarPlaceholder: {
        width: 120,
        height: 120,
        backgroundColor: themes.colors.primary,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        elevation: 3
    },
    avatarText: { fontSize: 44, color: themes.colors.white, fontWeight: 'bold' },
    form: { width: '100%' },
    label: { fontSize: 14, fontWeight: '600', color: themes.colors.gray, marginBottom: 8, marginLeft: 15 },
    input: {
        height: themes.metrics.inputHeight,
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
        borderRadius: themes.metrics.borderRadius,
        paddingHorizontal: 20,
        marginBottom: 15,
        color: themes.colors.text,
        backgroundColor: themes.colors.secondary,
        elevation: 1
    },
    button: { backgroundColor: themes.colors.primary, height: themes.metrics.inputHeight, borderRadius: themes.metrics.borderRadius, justifyContent: 'center', alignItems: 'center', elevation: 3 },
    buttonText: { color: themes.colors.white, fontWeight: 'bold', fontSize: 18 },
    btnDanger: {
        flexDirection: 'row',
        backgroundColor: themes.colors.secondary,
        width: '100%',
        padding: 15,
        borderRadius: themes.metrics.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        borderWidth: 2,
        borderColor: themes.colors.red
    },
    btnDangerText: { color: themes.colors.red, fontWeight: 'bold', fontSize: 16 }
});