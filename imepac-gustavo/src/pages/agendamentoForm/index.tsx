import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, TextInput as RNTextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';
import { usePaciente } from '../../contexts/PacienteContext';
import { maskDate, maskTime } from '../../utils/masks';

type Props = NativeStackScreenProps<RootStackParamList, 'AgendamentoForm'>;

export default function AgendamentoForm({ navigation, route }: Props) {
    const { agendamentos, adicionarAgendamento, editarAgendamento } = usePaciente();
    const agendamentoId = route.params?.agendamentoId;
    const isEdicao = !!agendamentoId;

    const [pacienteNome, setPacienteNome] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [procedimento, setProcedimento] = useState('');
    const [erros, setErros] = useState({ pacienteNome: '', data: '', hora: '', procedimento: '' });

    const dataRef = useRef<RNTextInput>(null);
    const horaRef = useRef<RNTextInput>(null);
    const procedimentoRef = useRef<RNTextInput>(null);

    useEffect(() => {
        if (isEdicao) {
            const atual = agendamentos.find(a => a.id === agendamentoId);
            if (atual) {
                setPacienteNome(atual.pacienteNome); setData(atual.data); setHora(atual.hora || ''); setProcedimento(atual.procedimento);
            }
        }
    }, [agendamentoId, agendamentos]);

    const handleSalvar = () => {
        let novosErros = { pacienteNome: '', data: '', hora: '', procedimento: '' };
        let temErro = false;

        if (!pacienteNome.trim()) { novosErros.pacienteNome = "Obrigatório."; temErro = true; }
        if (data.length < 10) { novosErros.data = "Data incompleta."; temErro = true; }
        if (hora.length < 5) { novosErros.hora = "Hora incompleta."; temErro = true; }
        if (!procedimento.trim()) { novosErros.procedimento = "Obrigatório."; temErro = true; }

        setErros(novosErros);
        if (temErro) return;

        const dados = { pacienteNome, data, hora, procedimento };

        if (isEdicao) {
            editarAgendamento(agendamentoId!, dados);
            dispararAviso("Consulta remarcada!");
        } else {
            adicionarAgendamento(dados);
            dispararAviso("Consulta agendada!");
        }
    };

    const dispararAviso = (msg: string) => { Platform.OS === 'web' ? (window.alert(msg), navigation.goBack()) : Alert.alert("Sucesso", msg, [{ text: "OK", onPress: () => navigation.goBack() }]); };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnVoltar}><MaterialIcons name="arrow-back" size={24} color="#2D3748" /></TouchableOpacity>
                    <Text style={styles.title}>{isEdicao ? "Editar Consulta" : "Nova Consulta"}</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Nome do Paciente</Text>
                    <TextInput style={styles.input} value={pacienteNome} onChangeText={(t) => { setPacienteNome(t); setErros({...erros, pacienteNome: ''}) }} placeholder="Ex: Ana Souza" returnKeyType="next" onSubmitEditing={() => dataRef.current?.focus()} />
                    {erros.pacienteNome ? <Text style={styles.textError}>{erros.pacienteNome}</Text> : null}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.label}>Data (DD/MM/AAAA)</Text>
                            <TextInput ref={dataRef} style={styles.input} value={data} onChangeText={(t) => { setData(maskDate(t)); setErros({...erros, data: ''}) }} placeholder="15/10/2026" keyboardType="number-pad" maxLength={10} returnKeyType="next" onSubmitEditing={() => horaRef.current?.focus()} />
                            {erros.data ? <Text style={styles.textError}>{erros.data}</Text> : null}
                        </View>

                        <View style={{ width: '48%' }}>
                            <Text style={styles.label}>Hora (HH:MM)</Text>
                            <TextInput ref={horaRef} style={styles.input} value={hora} onChangeText={(t) => { setHora(maskTime(t)); setErros({...erros, hora: ''}) }} placeholder="14:30" keyboardType="number-pad" maxLength={5} returnKeyType="next" onSubmitEditing={() => procedimentoRef.current?.focus()} />
                            {erros.hora ? <Text style={styles.textError}>{erros.hora}</Text> : null}
                        </View>
                    </View>

                    <Text style={styles.label}>Procedimento/Consulta</Text>
                    <TextInput ref={procedimentoRef} style={styles.input} value={procedimento} onChangeText={(t) => { setProcedimento(t); setErros({...erros, procedimento: ''}) }} placeholder="Ex: Retorno Exames" />
                    {erros.procedimento ? <Text style={styles.textError}>{erros.procedimento}</Text> : null}

                    <TouchableOpacity style={styles.button} onPress={handleSalvar}><Text style={styles.buttonText}>{isEdicao ? "Salvar Alterações" : "Confirmar Agendamento"}</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, backgroundColor: '#F0F4F8' }}>{Platform.OS === 'web' ? conteudo : <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{conteudo}</TouchableWithoutFeedback>}</KeyboardAvoidingView>;
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20, paddingTop: 50 }, header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 }, btnVoltar: { marginRight: 15, padding: 5 }, title: { fontSize: 24, fontWeight: 'bold', color: '#2D3748' }, form: { width: '100%', backgroundColor: '#FFF', padding: 20, borderRadius: 10, elevation: 2 }, label: { fontSize: 14, fontWeight: 'bold', color: '#4A5568', marginBottom: 5, marginLeft: 5 }, input: { height: 50, borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, paddingHorizontal: 15, marginBottom: 5, color: '#2D3748', backgroundColor: '#F7FAFC' }, textError: { color: '#E53E3E', fontSize: 12, marginLeft: 5, marginBottom: 10, fontWeight: '500' }, button: { backgroundColor: '#3182CE', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 15, elevation: 3 }, buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 } });