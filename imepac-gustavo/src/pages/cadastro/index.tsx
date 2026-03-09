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
    Alert
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import Logo from '../../assets/icons8-login-96.png';

export default function Cadastro({ onNavigate }: any) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        if (!nome || !email || !senha) {
            Alert.alert("Erro no Cadastro", "Todos os campos são obrigatórios!");
            return;
        }

        Alert.alert("Cadastro realizado", `Usuário ${nome} cadastrado com sucesso!`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
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
                            onChangeText={setNome}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#A0AEC0"
                        />
                        <MaterialIcons name="person" size={20} color="#A0AEC0" />
                    </View>

                    <Text style={style.labelInput}>E-mail</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="exemplo@email.com"
                            placeholderTextColor="#A0AEC0"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <MaterialIcons name="email" size={20} color="#A0AEC0" />
                    </View>

                    <Text style={style.labelInput}>Senha</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={senha}
                            onChangeText={setSenha}
                            placeholder="Crie uma senha forte"
                            placeholderTextColor="#A0AEC0"
                            secureTextEntry
                        />
                        <MaterialIcons name="lock" size={20} color="#A0AEC0" />
                    </View>

                    <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={handleCadastro}>
                        <Text style={style.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.boxBottom}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onNavigate('login')}>
                        <Text style={style.footerText}>
                            Já tem uma conta? <Text style={style.footerLink}>Faça Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}