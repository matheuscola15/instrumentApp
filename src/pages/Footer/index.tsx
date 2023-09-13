import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Desenvolvido por Matheus Cola.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 80 / 368 * width,
    width: '100%',
    backgroundColor: '#2B2D33', 
    padding: 10, 
    alignItems: 'flex-end',
    justifyContent: 'flex-end' 
  },
  text: {
    color: '#fff', // Cor do texto
    fontSize: 16,
    fontFamily: "MontserratItalic"
  },
});

export default Footer;