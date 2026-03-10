import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Alert
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import Logo from '../../assets/icons8-login-96.png';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export default function Cadastro({ navigation }: Props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    // Regex aprimorada: exige texto antes do @, texto depois, um ponto e pelo menos 2 letras no final
    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleCadastro = () => {
        setErroNome('');
        setErroEmail('');
        setErroSenha('');
        let temErro = false;

        if (!nome.trim()) {
            setErroNome("O nome completo é obrigatório.");
            temErro = true;
        }

        if (!email.trim()) {
            setErroEmail("O e-mail é obrigatório.");
            temErro = true;
        } else if (!validarEmail(email)) {
            setErroEmail("Digite um e-mail válido (ex: nome@dominio.com).");
            temErro = true;
        }

        if (!senha) {
            setErroSenha("A senha é obrigatória.");
            temErro = true;
        } else if (senha.length < 6) {
            setErroSenha("A senha deve ter pelo menos 6 caracteres.");
            temErro = true;
        }

        if (temErro) return;

        if (Platform.OS === 'web') {
            window.alert(`Usuário ${nome} cadastrado com sucesso!`);
            navigation.navigate("Home");
        } else {
            Alert.alert("Cadastro realizado", `Usuário ${nome} cadastrado com sucesso!`, [
                { text: "OK", onPress: () => navigation.navigate("Home") }
            ]);
        }
    };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={style.container}>
                <View style={style.boxTop}>
                    <Image source={Logo} style={style.logo} resizeMode="contain" />
                    <Text style={style.title}>Criar Conta</Text>
                </View>

                <View style={style.boxMid}>
                    <Text style={style.labelInput}>Nome Completo</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={nome}
                            onChangeText={(texto) => { setNome(texto); setErroNome(""); }}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#A0AEC0"
                        />
                        <MaterialIcons name="person" size={20} color="#A0AEC0" />
                    </View>
                    {erroNome ? <Text style={style.textError}>{erroNome}</Text> : null}

                    <Text style={style.labelInput}>E-mail</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={(texto) => { setEmail(texto); setErroEmail(""); }}
                            placeholder="exemplo@email.com"
                            placeholderTextColor="#A0AEC0"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <MaterialIcons name="email" size={20} color="#A0AEC0" />
                    </View>
                    {erroEmail ? <Text style={style.textError}>{erroEmail}</Text> : null}

                    <Text style={style.labelInput}>Senha</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={senha}
                            onChangeText={(texto) => { setSenha(texto); setErroSenha(""); }}
                            placeholder="Crie uma senha forte"
                            placeholderTextColor="#A0AEC0"
                            secureTextEntry
                        />
                        <MaterialIcons name="lock" size={20} color="#A0AEC0" />
                    </View>
                    {erroSenha ? <Text style={style.textError}>{erroSenha}</Text> : null}

                    <TouchableOpacity style={[style.button, { marginTop: 15 }]} activeOpacity={0.8} onPress={handleCadastro}>
                        <Text style={style.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.boxBottom}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Login")}>
                        <Text style={style.footerText}>
                            Já tem uma conta? <Text style={style.footerLink}>Faça Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
            {Platform.OS === 'web' ? conteudo : (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {conteudo}
                </TouchableWithoutFeedback>
            )}
        </KeyboardAvoidingView>
    );
}