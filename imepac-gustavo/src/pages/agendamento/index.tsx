import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../../components/menu/Menu';
import { usePaciente } from '../../contexts/PacienteContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Agendamento'>;

export default function Agendamento({ navigation }: Props) {
    const { agendamentos, removerAgendamento } = usePaciente();

    const confirmarExclusao = (id: string, procedimento: string) => {
        if (Platform.OS === 'web') {
            if (window.confirm(`Cancelar o agendamento de ${procedimento}?`)) removerAgendamento(id);
        } else {
            Alert.alert("Atenção", `Cancelar o agendamento de ${procedimento}?`, [
                { text: "Não", style: "cancel" },
                { text: "Sim, cancelar", style: "destructive", onPress: () => removerAgendamento(id) }
            ]);
        }
    };

    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Agenda da Clínica</Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AgendamentoForm', {})}>
                        <MaterialIcons name="add" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {agendamentos.length === 0 ? (
                    <Text style={styles.emptyText}>Nenhuma consulta agendada.</Text>
                ) : (
                    <FlatList
                        data={agendamentos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.nome}>{item.pacienteNome}</Text>
                                    <Text style={styles.detalhe}><MaterialIcons name="calendar-today" size={14}/> {item.data}</Text>
                                    <Text style={styles.detalhe}><MaterialIcons name="local-hospital" size={14}/> {item.procedimento}</Text>
                                </View>

                                <View style={styles.actionsContainer}>
                                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#3182CE' }]} onPress={() => navigation.navigate('AgendamentoForm', { agendamentoId: item.id })}>
                                        <MaterialIcons name="edit" size={20} color="#FFF" />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#E53E3E', marginTop: 10 }]} onPress={() => confirmarExclusao(item.id, item.procedimento)}>
                                        <MaterialIcons name="close" size={20} color="#FFF" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        style={{ width: '100%' }}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F0F4F8' },
    content: { flex: 1, padding: 20 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#2D3748' },
    btnAdd: { backgroundColor: '#38A169', padding: 10, borderRadius: 8, elevation: 2 },
    emptyText: { textAlign: 'center', color: '#718096', fontSize: 16, marginTop: 50 },
    card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15, width: '100%', elevation: 2, flexDirection: 'row', justifyContent: 'space-between' },
    infoContainer: { flex: 1 },
    nome: { fontSize: 18, fontWeight: 'bold', color: '#2D3748', marginBottom: 5 },
    detalhe: { fontSize: 14, color: '#718096', marginBottom: 4 },
    actionsContainer: { justifyContent: 'center', alignItems: 'center', paddingLeft: 10 },
    actionBtn: { padding: 8, borderRadius: 5 }
});