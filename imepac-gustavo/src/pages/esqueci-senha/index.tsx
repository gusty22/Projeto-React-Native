import React, { useState } from "react";
import {
    View,
    Text,
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

export default function ForgotPassword({ onNavigate }: any) {
    const [email, setEmail] = useState('');

    const handleRecuperar = () => {
        if (!email) {
            Alert.alert("Erro", "Digite seu e-mail para recuperar a senha.");
            return;
        }

        Alert.alert("E-mail enviado", `Instruções enviadas para ${email}`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                <View style={style.boxTop}>
                    <Text style={style.title}>Recuperar Senha</Text>
                    <Text style={style.description}>
                        Digite o e-mail cadastrado para receber as instruções.
                    </Text>
                </View>

                <View style={style.boxMid}>
                    <Text style={style.labelInput}>E-mail de Recuperação</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="seu-email@exemplo.com"
                            placeholderTextColor="#A0AEC0"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <MaterialIcons name="email" size={20} color="#A0AEC0" />
                    </View>

                    <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={handleRecuperar}>
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