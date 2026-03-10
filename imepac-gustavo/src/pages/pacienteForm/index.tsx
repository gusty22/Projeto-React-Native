import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';
import { usePaciente } from '../../contexts/PacienteContext';
import { maskCEP, maskPhone } from '../../utils/masks';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PacienteForm'>;

export default function PacienteForm({ navigation, route }: Props) {
    const { pacientes, adicionarPaciente, editarPaciente } = usePaciente();
    const pacienteId = route.params?.pacienteId;
    const isEdicao = !!pacienteId;

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    const [buscandoCep, setBuscandoCep] = useState(false);
    const [erros, setErros] = useState({ nome: '', email: '', telefone: '', cep: '', numero: '' });

    useEffect(() => {
        if (isEdicao) {
            const pacienteAtual = pacientes.find(p => p.id === pacienteId);
            if (pacienteAtual) {
                setNome(pacienteAtual.nome);
                setEmail(pacienteAtual.email);
                setTelefone(pacienteAtual.telefone);
                setCep(pacienteAtual.cep);
                setRua(pacienteAtual.rua);
                setNumero(pacienteAtual.numero || '');
                setBairro(pacienteAtual.bairro);
                setCidade(pacienteAtual.cidade);
            }
        }
    }, [pacienteId, pacientes]);

    const handleCepChange = async (texto: string) => {
        const cepFormatado = maskCEP(texto);
        setCep(cepFormatado);
        setErros({ ...erros, cep: '' });

        if (cepFormatado.length === 9) {
            setBuscandoCep(true);
            const cepLimpo = cepFormatado.replace(/\D/g, '');

            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
                const dados = await resposta.json();

                if (dados.erro) {
                    setErros({ ...erros, cep: 'CEP não encontrado.' });
                    setRua('');
                    setBairro('');
                    setCidade('');
                } else {
                    setRua(dados.logradouro);
                    setBairro(dados.bairro);
                    setCidade(`${dados.localidade} - ${dados.uf}`);
                    setErros({ ...erros, cep: '' });
                }
            } catch (error) {
                setErros({ ...erros, cep: 'Erro ao buscar o CEP.' });
            } finally {
                setBuscandoCep(false);
            }
        } else {
            setRua('');
            setBairro('');
            setCidade('');
        }
    };

    const validarEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);

    const handleSalvar = () => {
        let novosErros = { nome: '', email: '', telefone: '', cep: '', numero: '' };
        let temErro = false;

        if (!nome.trim()) { novosErros.nome = "Nome é obrigatório."; temErro = true; }

        if (!email.trim()) {
            novosErros.email = "E-mail é obrigatório.";
            temErro = true;
        } else if (!validarEmail(email)) {
            novosErros.email = "Digite um e-mail válido.";
            temErro = true;
        }

        if (!telefone.trim() || telefone.length < 14) {
            novosErros.telefone = "Telefone incompleto ou ausente.";
            temErro = true;
        }

        if (!cep.trim() || cep.length < 9) {
            novosErros.cep = "CEP incompleto.";
            temErro = true;
        } else if (!rua) {
            novosErros.cep = "Insira um CEP válido para encontrar o endereço.";
            temErro = true;
        }

        if (!numero.trim()) {
            novosErros.numero = "O número é obrigatório.";
            temErro = true;
        }

        setErros(novosErros);
        if (temErro) return;

        const dadosPaciente = { nome, email, telefone, cep, rua, numero, bairro, cidade };

        if (isEdicao) {
            editarPaciente(pacienteId!, dadosPaciente);
            dispararAviso("Paciente atualizado com sucesso!");
        } else {
            adicionarPaciente(dadosPaciente);
            dispararAviso("Paciente cadastrado com sucesso!");
        }
    };

    const dispararAviso = (mensagem: string) => {
        if (Platform.OS === 'web') {
            window.alert(mensagem);
            navigation.goBack();
        } else {
            Alert.alert("Sucesso", mensagem, [{ text: "OK", onPress: () => navigation.goBack() }]);
        }
    };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnVoltar}>
                        <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{isEdicao ? "Editar Paciente" : "Novo Paciente"}</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={(t) => { setNome(t); setErros({...erros, nome: ''}) }}
                        placeholder="Ex: João da Silva"
                    />
                    {erros.nome ? <Text style={styles.textError}>{erros.nome}</Text> : null}

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(t) => { setEmail(t); setErros({...erros, email: ''}) }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Ex: joao@email.com"
                    />
                    {erros.email ? <Text style={styles.textError}>{erros.email}</Text> : null}

                    <Text style={styles.label}>Telefone (Com DDD)</Text>
                    <TextInput
                        style={styles.input}
                        value={telefone}
                        onChangeText={(t) => { setTelefone(maskPhone(t)); setErros({...erros, telefone: ''}) }}
                        keyboardType="phone-pad"
                        maxLength={15}
                        placeholder="(11) 99999-9999"
                    />
                    {erros.telefone ? <Text style={styles.textError}>{erros.telefone}</Text> : null}

                    <View style={styles.cepContainer}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>CEP</Text>
                            <TextInput
                                style={styles.input}
                                value={cep}
                                onChangeText={handleCepChange}
                                keyboardType="number-pad"
                                maxLength={9}
                                placeholder="00000-000"
                            />
                        </View>
                        {buscandoCep && <ActivityIndicator size="small" color="#3182CE" style={{ marginLeft: 10, marginTop: 15 }} />}
                    </View>
                    {erros.cep ? <Text style={styles.textError}>{erros.cep}</Text> : null}

                    <Text style={styles.label}>Rua</Text>
                    <TextInput style={[styles.input, { backgroundColor: '#E2E8F0', color: '#718096' }]} value={rua} editable={false} placeholder="Preenchido automaticamente" />

                    <Text style={styles.label}>Número / Complemento</Text>
                    <TextInput
                        style={styles.input}
                        value={numero}
                        onChangeText={(t) => { setNumero(t); setErros({...erros, numero: ''}) }}
                        placeholder="Ex: 123 - Apto 4"
                    />
                    {erros.numero ? <Text style={styles.textError}>{erros.numero}</Text> : null}

                    <Text style={styles.label}>Bairro</Text>
                    <TextInput style={[styles.input, { backgroundColor: '#E2E8F0', color: '#718096' }]} value={bairro} editable={false} placeholder="Preenchido automaticamente" />

                    <Text style={styles.label}>Cidade / UF</Text>
                    <TextInput style={[styles.input, { backgroundColor: '#E2E8F0', color: '#718096' }]} value={cidade} editable={false} placeholder="Preenchido automaticamente" />

                    <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                        <Text style={styles.buttonText}>{isEdicao ? "Salvar Alterações" : "Cadastrar Paciente"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, backgroundColor: '#F0F4F8' }}>
            {Platform.OS === 'web' ? conteudo : <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{conteudo}</TouchableWithoutFeedback>}
        </KeyboardAvoidingView>
    );
}