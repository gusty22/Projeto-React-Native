import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Menu from '../../components/menu/Menu';

export default function Contato() {
    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.content}>
                <Text style={styles.title}>Suporte Técnico</Text>
                <Text style={styles.text}>Precisa de ajuda com o sistema da clínica?</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>E-mail de Suporte:</Text>
                    <Text style={styles.info}>suporte@sistemaclinica.com.br</Text>

                    <Text style={styles.label}>Telefone (Urgências):</Text>
                    <Text style={styles.info}>0800 123 4567</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F0F4F8' },
    content: { flex: 1, padding: 20, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#2D3748', marginBottom: 10 },
    text: { fontSize: 16, color: '#718096', marginBottom: 30, textAlign: 'center' },
    card: { backgroundColor: '#FFF', padding: 20, borderRadius: 10, width: '100%', elevation: 2 },
    label: { fontSize: 14, fontWeight: 'bold', color: '#4A5568', marginTop: 15 },
    info: { fontSize: 16, color: '#3182CE', marginTop: 5 }
});