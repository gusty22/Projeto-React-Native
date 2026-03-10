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
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icons8-login-96.png";
import { themes } from "../../global/themes";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erroEmail, setErroEmail] = useState("");
    const [erroSenha, setErroSenha] = useState("");

    // Regex aprimorada idêntica à do cadastro
    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleLogin = () => {
        setErroEmail("");
        setErroSenha("");
        let temErro = false;

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
            window.alert("Login realizado com sucesso!");
            navigation.navigate("Home");
        } else {
            Alert.alert("Sucesso", "Login realizado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate("Home") }
            ]);
        }
    };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={style.container}>
                <View style={style.boxTop}>
                    <Image source={Logo} style={style.logo} resizeMode="contain" />
                    <Text style={style.title}>Bem-vindo</Text>
                </View>

                <View style={style.boxMid}>
                    <Text style={style.labelInput}>Endereço de E-mail</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={(texto) => {
                                setEmail(texto);
                                setErroEmail("");
                            }}
                            placeholder="exemplo@email.com"
                            placeholderTextColor={themes.colors.gray}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <MaterialIcons name="email" size={20} color={themes.colors.gray} />
                    </View>
                    {erroEmail ? <Text style={style.textError}>{erroEmail}</Text> : null}

                    <Text style={style.labelInput}>Senha</Text>
                    <View style={style.boxInputContainer}>
                        <TextInput
                            style={style.input}
                            value={senha}
                            onChangeText={(texto) => {
                                setSenha(texto);
                                setErroSenha("");
                            }}
                            placeholder="Sua senha segura"
                            placeholderTextColor={themes.colors.gray}
                            secureTextEntry
                        />
                        <MaterialIcons name="lock" size={20} color={themes.colors.gray} />
                    </View>
                    {erroSenha ? <Text style={style.textError}>{erroSenha}</Text> : null}

                    <TouchableOpacity style={[style.button, { marginTop: 20 }]} activeOpacity={0.8} onPress={handleLogin}>
                        <Text style={style.buttonText}>Acessar Sistema</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.boxBottom}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={style.footerText}>
                            Não tem uma conta? <Text style={style.footerLink}>Cadastre-se</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
            {Platform.OS === 'web' ? conteudo : (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {conteudo}
                </TouchableWithoutFeedback>
            )}
        </KeyboardAvoidingView>
    );
}