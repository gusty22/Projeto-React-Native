import React, { useState } from "react"; //
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
    Alert // Importante para testar o botão depois
} from 'react-native';

// Importando ícones do Expo
 import {MaterialIcons} from '@expo/vector-icons'; 

import { style } from './styles';
import Logo from '../../assets/icons8-login-96.png'; 
import { themes } from "../../global/themes";

export default function Login({ onNavigate }: any) {
    // Definindo os estados para armazenar email e senha
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para testar se está pegando os dados
    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Senha:", senha);
        // Aqui futuramente entra a lógica de verificar no Firebase
        Alert.alert("Dados Capturados", `Email: ${email}\nSenha: ${senha}`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                <View style={style.boxTop}>
                    <Image source={Logo} style={style.logo} resizeMode="contain" />
                    <Text style={style.title}>Bem-vindo</Text>
                </View>

                <View style={style.boxMid}>
                    <Text style={style.labelInput}>Endereço de E-mail</Text>
                    {/* Input com Ícone */}
                    <View style={style.boxInput}>
                        <MaterialIcons 
                            name="email" 
                            size={20} 
                            color={themes.colors.gray} 
                        />
                        <TextInput 
                            style={style.input} 
                            value={email} // Vinculando ao estado
                            onChangeText={setEmail} // Atualizando o estado
                            placeholder="exemplo@email.com"
                            placeholderTextColor={themes.colors.lightGray} // Usando tema
                        />
                    </View>

                    <Text style={style.labelInput}>Senha</Text>
                    {/* Input com Ícone */}
                    <View style={style.boxInput}>
                        <MaterialIcons 
                            name="lock" // Usei 'lock' pois é padrão, se preferir 'password' teste se o ícone aparece
                            size={20} 
                            color={themes.colors.gray} 
                        />
                        <TextInput 
                            style={style.input} 
                            value={senha} // Vinculando ao estado
                            onChangeText={setSenha} // Atualizando o estado
                            placeholder="Sua senha segura"
                            placeholderTextColor={themes.colors.lightGray}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity 
                        style={style.forgotPasswordContainer} 
                        activeOpacity={0.7}
                        onPress={() => onNavigate('esqueci-senha')}
                    >
                        <Text style={style.forgotPasswordText}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={style.button} 
                        activeOpacity={0.8}
                        onPress={handleLogin} // Chama a função de login
                    >
                        <Text style={style.buttonText}>Acessar Sistema</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.boxBottom}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onNavigate('cadastro')}>
                        <Text style={style.footerText}>
                            Não tem uma conta? <Text style={style.footerLink}>Cadastre-se</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}