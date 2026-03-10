// home/styles.js
import { StyleSheet } from 'react-native';
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: themes.colors.bgScreen, alignItems: 'center', justifyContent: 'flex-start' },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', color: themes.colors.text, marginBottom: 10 },
    subtitle: { fontSize: 16, color: themes.colors.gray }
});