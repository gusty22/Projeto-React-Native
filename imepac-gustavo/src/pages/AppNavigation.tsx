import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PacienteProvider } from '../contexts/PacienteContext';

import Login from './login/index';
import Cadastro from './cadastro/index';
import Home from './home/index';
import Pacientes from './pacientes/index';
import PacienteForm from './pacienteForm/index';
import Agendamento from './agendamento/index';
import AgendamentoForm from './agendamentoForm/index';
import Perfil from './perfil/index';
import Dashboard from './dashboard/index';

export type RootStackParamList = {
    Login: undefined; Cadastro: undefined; Home: undefined; Pacientes: undefined; PacienteForm: { pacienteId?: string }; Agendamento: undefined; AgendamentoForm: { agendamentoId?: string }; Perfil: undefined; Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <PacienteProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Pacientes" component={Pacientes} />
                    <Stack.Screen name="PacienteForm" component={PacienteForm} />
                    <Stack.Screen name="Agendamento" component={Agendamento} />
                    <Stack.Screen name="AgendamentoForm" component={AgendamentoForm} />
                    <Stack.Screen name="Perfil" component={Perfil} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </PacienteProvider>
    );
}