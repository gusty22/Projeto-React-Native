import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from '../../components/menu/Menu';
import { usePaciente } from '../../contexts/PacienteContext';
import { maskPhone } from '../../utils/masks';
import { styles } from './styles';

export default function Perfil() {
    const { perfil, salvarPerfil, apagarPerfil, limparTodosDados } = usePaciente();

    const [nome, setNome] = useState('');
    const [crm, setCrm] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        if (perfil) {
            setNome(perfil.nome); setCrm(perfil.crm); setEspecialidade(perfil.especialidade); setTelefone(perfil.telefone);
        } else {
            setNome(''); setCrm(''); setEspecialidade(''); setTelefone('');
        }
    }, [perfil]);

    const handleSalvar = () => {
        salvarPerfil({ nome, crm, especialidade, telefone });
        Platform.OS === 'web' ? window.alert("Perfil atualizado!") : Alert.alert("Sucesso", "Perfil atualizado!");
    };

    const handleApagarPerfil = () => {
        apagarPerfil();
        Platform.OS === 'web' ? window.alert("Perfil excluído!") : Alert.alert("Aviso", "Perfil excluído!");
    };

    const handleLimparSistema = () => {
        if (Platform.OS === 'web') {
            if (window.confirm("Apagar todos os registros do sistema?")) { limparTodosDados(); window.alert("Sistema limpo!"); }
        } else {
            Alert.alert("Atenção", "Apagar todos os registros do sistema?", [ { text: "Cancelar", style: "cancel" }, { text: "Sim", style: "destructive", onPress: () => limparTodosDados() } ]);
        }
    };

    return (
        <View style={styles.container}>
            <Menu />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.avatarPlaceholder}><Text style={styles.avatarText}>{nome ? nome.charAt(0).toUpperCase() : 'M'}</Text></View>

                <View style={styles.form}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: Dr. Gustavo Henrique" />

                    <Text style={styles.label}>CRM / Documento</Text>
                    <TextInput style={styles.input} value={crm} onChangeText={setCrm} placeholder="Ex: 123456-SP" />

                    <Text style={styles.label}>Especialidade</Text>
                    <TextInput style={styles.input} value={especialidade} onChangeText={setEspecialidade} placeholder="Ex: Cardiologista" />

                    <Text style={styles.label}>Telefone Comercial</Text>
                    <TextInput style={styles.input} value={telefone} onChangeText={(t) => setTelefone(maskPhone(t))} keyboardType="phone-pad" maxLength={15} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <TouchableOpacity style={[styles.button, { flex: 1, marginRight: 10 }]} onPress={handleSalvar}><Text style={styles.buttonText}>Salvar Perfil</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#E53E3E', paddingHorizontal: 15 }]} onPress={handleApagarPerfil}><MaterialIcons name="delete" size={24} color="#FFF" /></TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnDanger} onPress={handleLimparSistema}>
                    <MaterialIcons name="warning" size={20} color="#FFF" style={{ marginRight: 8 }} />
                    <Text style={styles.btnDangerText}>Limpar Tudo (Pacientes e Agendas)</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}