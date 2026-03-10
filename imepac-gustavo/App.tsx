import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppNavigation from './src/pages/AppNavigation';

export default function App() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar style="dark" />
            <AppNavigation />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
});