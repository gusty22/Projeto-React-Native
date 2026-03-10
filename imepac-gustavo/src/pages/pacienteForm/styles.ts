// paciente/formStyles.js
import { StyleSheet } from 'react-native';
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, paddingTop: 40, backgroundColor: themes.colors.bgScreen },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
    btnVoltar: { marginRight: 15, padding: 10, backgroundColor: themes.colors.secondary, borderRadius: themes.metrics.borderRadius, elevation: 1 },
    title: { fontSize: 26, fontWeight: 'bold', color: themes.colors.text },
    form: { width: '100%' },
    label: { fontSize: 14, fontWeight: '600', color: themes.colors.gray, marginBottom: 8, marginLeft: 15 },
    input: {
        height: themes.metrics.inputHeight,
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
        borderRadius: themes.metrics.borderRadius,
        paddingHorizontal: 20,
        marginBottom: 10,
        color: themes.colors.text,
        backgroundColor: themes.colors.secondary,
        elevation: 1
    },
    cepContainer: { flexDirection: 'row', alignItems: 'center' },
    textError: { color: themes.colors.red, fontSize: 12, marginLeft: 15, marginBottom: 15, fontWeight: '500' },
    button: { backgroundColor: themes.colors.primary, height: themes.metrics.inputHeight, borderRadius: themes.metrics.borderRadius, justifyContent: 'center', alignItems: 'center', marginTop: 15, elevation: 3 },
    buttonText: { color: themes.colors.white, fontWeight: 'bold', fontSize: 18 }
});