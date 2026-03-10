// agendamento/styles.js
import { StyleSheet } from 'react-native';
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: themes.colors.bgScreen },
    content: { flex: 1, padding: 25 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
    title: { fontSize: 26, fontWeight: 'bold', color: themes.colors.text },
    btnAdd: { backgroundColor: themes.colors.primary, paddingVertical: 12, paddingHorizontal: 20, borderRadius: themes.metrics.borderRadius, elevation: 2 },
    emptyText: { textAlign: 'center', color: themes.colors.gray, fontSize: 16, marginTop: 50 },
    card: {
        backgroundColor: themes.colors.secondary,
        padding: 20,
        borderRadius: themes.metrics.borderRadius,
        marginBottom: 15,
        width: '100%',
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: themes.colors.lightGray
    },
    infoContainer: { flex: 1 },
    nome: { fontSize: 18, fontWeight: 'bold', color: themes.colors.text, marginBottom: 5 },
    detalhe: { fontSize: 14, color: themes.colors.gray, marginBottom: 4 },
    actionsContainer: { justifyContent: 'center', alignItems: 'center', paddingLeft: 10 },
    actionBtn: { padding: 10, borderRadius: themes.metrics.borderRadius }
});