import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../pages/AppNavigation";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { style } from "./styles";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Menu() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={style.menuContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.scrollContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={style.btn}><Text style={style.menuItem}>🏠 Home</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={style.btn}><Text style={style.menuItem}>📊 Dashboard</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Pacientes")} style={style.btn}><Text style={style.menuItem}>👥 Pacientes</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Agendamento")} style={style.btn}><Text style={style.menuItem}>📅 Agendar</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")} style={style.btn}><Text style={style.menuItem}>👤 Perfil</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={style.btnSair}><Text style={style.menuItemSair}>Sair</Text></TouchableOpacity>
            </ScrollView>
        </View>
    );
}