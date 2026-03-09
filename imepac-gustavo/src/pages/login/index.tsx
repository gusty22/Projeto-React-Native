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
  Alert,
  ScrollView
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icons8-login-96.png";
import { themes } from "../../global/themes";

export default function Login({ onNavigate }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // ✅ Validação de e-mail
  const validarEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert("E-mail inválido", "Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    Alert.alert("Sucesso", "Login realizado com sucesso!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
                  onChangeText={setEmail}
                  placeholder="exemplo@email.com"
                  placeholderTextColor={themes.colors.lightGray}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <MaterialIcons
                  name="email"
                  size={20}
                  color={themes.colors.gray}
                />
              </View>

              <Text style={style.labelInput}>Senha</Text>
              <View style={style.boxInputContainer}>
                <TextInput
                  style={style.input}
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Sua senha segura"
                  placeholderTextColor={themes.colors.lightGray}
                  secureTextEntry
                />
                <MaterialIcons
                  name="lock"
                  size={20}
                  color={themes.colors.gray}
                />
              </View>

              <TouchableOpacity
                style={style.forgotPasswordContainer}
                activeOpacity={0.7}
                onPress={() => onNavigate("esqueci-senha")}
              >
                <Text style={style.forgotPasswordText}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.button}
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                <Text style={style.buttonText}>Acessar Sistema</Text>
              </TouchableOpacity>
            </View>

            <View style={style.boxBottom}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onNavigate("cadastro")}
              >
                <Text style={style.footerText}>
                  Não tem uma conta?{" "}
                  <Text style={style.footerLink}>Cadastre-se</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}