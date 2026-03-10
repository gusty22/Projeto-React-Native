import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../../components/menu/Menu';
import { usePaciente } from '../../contexts/PacienteContext';
import { styles } from './styles';

export default function Dashboard() {
    const { pacientes, agendamentos, perfil } = usePaciente();

    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.content}>
                <Text style={styles.greeting}>Olá, {perfil?.nome || 'Doutor(a)'}!</Text>
                <Text style={styles.subtitle}>Visão geral da sua clínica hoje:</Text>

                <View style={styles.cardsContainer}>
                    <View style={[styles.card, { borderTopColor: '#3182CE' }]}>
                        <MaterialIcons name="people" size={40} color="#3182CE" />
                        <Text style={styles.cardNumber}>{pacientes.length}</Text>
                        <Text style={styles.cardLabel}>Pacientes</Text>
                    </View>

                    <View style={[styles.card, { borderTopColor: '#38A169' }]}>
                        <MaterialIcons name="event" size={40} color="#38A169" />
                        <Text style={styles.cardNumber}>{agendamentos.length}</Text>
                        <Text style={styles.cardLabel}>Consultas</Text>
                    </View>
                </View>

                <View style={styles.avisoBox}>
                    <MaterialIcons name="info-outline" size={24} color="#D69E2E" style={{ marginRight: 10 }} />
                    <Text style={{ flex: 1, color: '#975A16' }}>Mantenha os dados do seu perfil atualizados na aba "Perfil" para exibição nos receituários.</Text>
                </View>
            </View>
        </View>
    );
}