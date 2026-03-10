import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        alignItems: 'center',
        justifyContent: 'flex-start', // Garante que o menu fique colado no topo
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#4A5568',
    }
});