import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../../components/menu/Menu';
import { usePaciente } from '../../contexts/PacienteContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';
import { style } from './styles';

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
        <View style={style.container}>
            <Menu />
            <View style={style.content}>
                <View style={style.header}>
                    <Text style={style.title}>Agenda da Clínica</Text>
                    <TouchableOpacity style={style.btnAdd} onPress={() => navigation.navigate('AgendamentoForm', {})}>
                        <MaterialIcons name="add" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {agendamentos.length === 0 ? (
                    <Text style={style.emptyText}>Nenhuma consulta agendada.</Text>
                ) : (
                    <FlatList
                        data={agendamentos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={style.card}>
                                <View style={style.infoContainer}>
                                    <Text style={style.nome}>{item.pacienteNome}</Text>
                                    <Text style={style.detalhe}><MaterialIcons name="calendar-today" size={14}/> {item.data}</Text>
                                    <Text style={style.detalhe}><MaterialIcons name="local-hospital" size={14}/> {item.procedimento}</Text>
                                </View>

                                <View style={style.actionsContainer}>
                                    <TouchableOpacity style={[style.actionBtn, { backgroundColor: '#3182CE' }]} onPress={() => navigation.navigate('AgendamentoForm', { agendamentoId: item.id })}>
                                        <MaterialIcons name="edit" size={20} color="#FFF" />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[style.actionBtn, { backgroundColor: '#E53E3E', marginTop: 10 }]} onPress={() => confirmarExclusao(item.id, item.procedimento)}>
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