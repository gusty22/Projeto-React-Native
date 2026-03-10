import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../../components/menu/Menu';
import { usePaciente } from '../../contexts/PacienteContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Pacientes'>;

export default function Pacientes({ navigation }: Props) {
    const { pacientes, removerPaciente } = usePaciente();

    const confirmarExclusao = (id: string, nome: string) => {
        if (Platform.OS === 'web') {
            if (window.confirm(`Tem certeza que deseja excluir o paciente ${nome}?`)) {
                removerPaciente(id);
            }
        } else {
            Alert.alert("Atenção", `Deseja realmente excluir ${nome}?`, [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive", onPress: () => removerPaciente(id) }
            ]);
        }
    };

    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Pacientes Cadastrados</Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('PacienteForm', {})}>
                        <MaterialIcons name="add" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {pacientes.length === 0 ? (
                    <Text style={styles.emptyText}>Nenhum paciente cadastrado no momento.</Text>
                ) : (
                    <FlatList
                        data={pacientes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.nome}>{item.nome}</Text>
                                    <Text style={styles.detalhe}><MaterialIcons name="email" size={14}/> {item.email}</Text>
                                    <Text style={styles.detalhe}><MaterialIcons name="location-on" size={14}/> {item.cidade}</Text>
                                </View>

                                <View style={styles.actionsContainer}>
                                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#3182CE' }]} onPress={() => navigation.navigate('PacienteForm', { pacienteId: item.id })}>
                                        <MaterialIcons name="edit" size={20} color="#FFF" />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#E53E3E', marginTop: 10 }]} onPress={() => confirmarExclusao(item.id, item.nome)}>
                                        <MaterialIcons name="delete" size={20} color="#FFF" />
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