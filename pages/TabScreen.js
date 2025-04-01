import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Página Tab</Text>
            <Text style={styles.subtitle}>
                Navegue para a próxima página para ver fotos do Show do Justin Bieber!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purplewhite",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#a8d9e3",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "#a8d9e3",
        textAlign: "center",
        paddingHorizontal: 15,
    },
});