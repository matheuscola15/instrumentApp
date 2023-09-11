import React from "react";
import {StyleSheet, View, Image, Dimensions } from "react-native";
import logo from "/expo/instrumentApp/assets/logo.png";

const width = Dimensions.get('screen').width;

export default function NavBar(){
    return<>
    <View>
    <Image source={logo} style={styles.logo}/>
    </View>
    </>
}
const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 80 / 368 * width
    },
})