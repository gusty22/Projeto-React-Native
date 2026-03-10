import React from "react";
import { Text, View } from 'react-native';
import { style } from './styles';
import Menu from '../../components/menu/Menu';

export default function Home() {
    return (
        <View style={style.container}>
            {/* O componente Menu entra aqui no topo */}
            <Menu />

            {/* Conteúdo principal da página */}
            <View style={style.content}>
                <Text style={style.title}>Home</Text>
                <Text style={style.subtitle}>Bem-vindo ao sistema</Text>
            </View>
        </View>
    );
}