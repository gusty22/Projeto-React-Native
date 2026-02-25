import React from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { style } from './styles';

export default function ForgotPassword({ onNavigate }: any) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                <View style={style.boxTop}>
                    <Text style={style.title}>Recuperar Senha</Text>
                    <Text style={style.description}>
                        Digite o e-mail cadastrado para receber as instruções de redefinição.
                    </Text>
                </View>

                <View style={style.boxMid}>
                    <Text style={style.labelInput}>E-mail de Recuperação</Text>
                    <TextInput 
                        style={style.boxInput} 
                        placeholder="seu-email@exemplo.com"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TouchableOpacity style={style.button} activeOpacity={0.8}>
                        <Text style={style.buttonText}>Enviar Instruções</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.boxBottom}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onNavigate('login')}>
                        <Text style={style.footerLink}>Voltar para o Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}