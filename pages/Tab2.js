import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native"; // Removida a duplicação de ScrollView

export default function Tab2() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tab 2</Text>
            <Text style={styles.subtitle}>
                JUSTIN BIEBER{"\n"}
            </Text>
            <Text style={styles.subtitle2}>{"\n"} Essa página é destinada a usuários que são fãs do Justin Bieber!!!❤{"\n"}</Text>

            <Image
                source={{
                    uri: "https://i.pinimg.com/736x/56/4e/a6/564ea67020b38579618687f7d9bbbd7f.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.description}>
            Essa imagem é do show dele em São Paulo!
            </Text>

            <Text style={styles.footer}>Show do Justin Bieber, São Paulo, Brasil</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a8d9e3",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0b147f",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0b147f",
        marginBottom: 20,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    subtitle2: {
        fontSize: 18,
        color: "white",
        marginBottom: 20,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    image: {
        width: 300,
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    footer: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0b147f",
        marginTop: 16,
    },
});