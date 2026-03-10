// dashboard/styles.js
import { StyleSheet } from 'react-native';
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: themes.colors.bgScreen },
    content: { flex: 1, padding: 25 },
    greeting: { fontSize: 28, fontWeight: 'bold', color: themes.colors.text, marginTop: 10 },
    subtitle: { fontSize: 16, color: themes.colors.gray, marginBottom: 35 },
    cardsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    card: {
        width: '48%',
        backgroundColor: themes.colors.secondary,
        padding: 25,
        borderRadius: themes.metrics.borderRadius,
        alignItems: 'center',
        elevation: 2,
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
    },
    cardNumber: { fontSize: 36, fontWeight: 'bold', color: themes.colors.text, marginTop: 10 },
    cardLabel: { fontSize: 14, color: themes.colors.gray, fontWeight: 'bold', marginTop: 5 },
    avisoBox: {
        flexDirection: 'row',
        backgroundColor: themes.colors.secondary,
        padding: 20,
        borderRadius: themes.metrics.borderRadius,
        marginTop: 35,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: themes.colors.primary
    }
});