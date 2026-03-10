import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Paciente = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    cep: string;
    rua: string;
    numero: string; // NOVO CAMPO ADICIONADO AQUI
    bairro: string;
    cidade: string;
};

export type Agendamento = {
    id: string;
    pacienteNome: string;
    data: string;
    hora: string;
    procedimento: string;
};

export type PerfilData = {
    nome: string;
    crm: string;
    especialidade: string;
    telefone: string;
};

type ContextData = {
    pacientes: Paciente[]; adicionarPaciente: (p: Omit<Paciente, 'id'>) => void; editarPaciente: (id: string, p: Omit<Paciente, 'id'>) => void; removerPaciente: (id: string) => void;
    agendamentos: Agendamento[]; adicionarAgendamento: (a: Omit<Agendamento, 'id'>) => void; editarAgendamento: (id: string, a: Omit<Agendamento, 'id'>) => void; removerAgendamento: (id: string) => void;
    perfil: PerfilData | null; salvarPerfil: (dados: PerfilData) => void; apagarPerfil: () => void;
    limparTodosDados: () => void;
};

const PacienteContext = createContext<ContextData>({} as ContextData);

export function PacienteProvider({ children }: { children: ReactNode }) {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    const [perfil, setPerfil] = useState<PerfilData | null>(null);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const p = await AsyncStorage.getItem('@clinica_pacientes');
                const a = await AsyncStorage.getItem('@clinica_agendamentos');
                const perf = await AsyncStorage.getItem('@clinica_perfil');
                if (p) setPacientes(JSON.parse(p));
                if (a) setAgendamentos(JSON.parse(a));
                if (perf) setPerfil(JSON.parse(perf));
            } catch (error) { console.error(error); }
        };
        carregarDados();
    }, []);

    const salvarNoStorage = async (chave: string, dados: any) => {
        await AsyncStorage.setItem(chave, JSON.stringify(dados));
    };

    const adicionarPaciente = (p: Omit<Paciente, 'id'>) => { const n = [...pacientes, { ...p, id: Date.now().toString() }]; setPacientes(n); salvarNoStorage('@clinica_pacientes', n); };
    const editarPaciente = (id: string, d: Omit<Paciente, 'id'>) => { const n = pacientes.map(p => p.id === id ? { ...p, ...d } : p); setPacientes(n); salvarNoStorage('@clinica_pacientes', n); };
    const removerPaciente = (id: string) => { const n = pacientes.filter(p => p.id !== id); setPacientes(n); salvarNoStorage('@clinica_pacientes', n); };

    const adicionarAgendamento = (a: Omit<Agendamento, 'id'>) => { const n = [...agendamentos, { ...a, id: Date.now().toString() }]; setAgendamentos(n); salvarNoStorage('@clinica_agendamentos', n); };
    const editarAgendamento = (id: string, d: Omit<Agendamento, 'id'>) => { const n = agendamentos.map(a => a.id === id ? { ...a, ...d } : a); setAgendamentos(n); salvarNoStorage('@clinica_agendamentos', n); };
    const removerAgendamento = (id: string) => { const n = agendamentos.filter(a => a.id !== id); setAgendamentos(n); salvarNoStorage('@clinica_agendamentos', n); };

    const salvarPerfil = (dados: PerfilData) => { setPerfil(dados); salvarNoStorage('@clinica_perfil', dados); };
    const apagarPerfil = async () => { setPerfil(null); await AsyncStorage.removeItem('@clinica_perfil'); };

    const limparTodosDados = async () => {
        setPacientes([]); setAgendamentos([]); setPerfil(null);
        await AsyncStorage.clear();
    };

    return (
        <PacienteContext.Provider value={{ pacientes, adicionarPaciente, editarPaciente, removerPaciente, agendamentos, adicionarAgendamento, editarAgendamento, removerAgendamento, perfil, salvarPerfil, apagarPerfil, limparTodosDados }}>
            {children}
        </PacienteContext.Provider>
    );
}
export function usePaciente() { return useContext(PacienteContext); }