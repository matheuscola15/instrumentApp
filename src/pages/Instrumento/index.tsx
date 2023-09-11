import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Instrumento(){
    return<>
    <View style={estilos.carrinho}>
        <Text style={estilos.nomeFazenda}>Loja de Instrumentos do Cola</Text>
        <Text style={estilos.nome}>Confira nossa lista de instrumentos!</Text>
    </View>
    </> 
}

const estilos = StyleSheet.create({
    carrinho: {
        marginTop: 30,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome:{
        fontSize: 16,
        fontFamily: "MontserratItalic",
        lineHeight: 26,
        marginLeft: 12,
        color: "white",
        textAlign: "center"
    },
    nomeFazenda:{
        fontSize: 24,
        fontFamily: "MontserratBold",
        lineHeight: 26,
        marginLeft: 12,
        color: "white"
    },
})