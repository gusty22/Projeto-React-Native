import React from "react";
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
    ScrollView 
} from 'react-native';
import { style } from './styles';
import Logo from '../../assets/icons8-login-96.png'; 

export default function Cadastro({ onNavigate }: any) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    <TextInput 
                        style={style.boxInput} 
                        placeholder="Digite seu nome"
                        placeholderTextColor="#A0AEC0"
                    />

                    <Text style={style.labelInput}>E-mail</Text>
                    <TextInput 
                        style={style.boxInput} 
                        placeholder="exemplo@email.com"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={style.labelInput}>Senha</Text>
                    <TextInput 
                        style={style.boxInput} 
                        placeholder="Crie uma senha forte"
                        placeholderTextColor="#A0AEC0"
                        secureTextEntry
                    />

                    <TouchableOpacity style={style.button} activeOpacity={0.8}>
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