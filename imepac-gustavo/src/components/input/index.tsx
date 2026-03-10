import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";

export const Input = forwardRef(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Componentes</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    }
});