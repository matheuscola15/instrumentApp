import {Alert, Button, SafeAreaView, StatusBar, View, FlatList, ImageBackground, StyleSheet, Text} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import Instrumento from './src/pages/Instrumento';
import NavBar from './src/pages/NavBar';
import DATA2 from './src/pages/Mocks/data2'
import DATA from './src/pages/Mocks/data'
import Footer from './src/pages/Footer';

type ItemProps = {title: string, foto: string, preco: string};
type ItemProps2 = {title2: string, foto2: string, preco2: string};

const Item = ({title, foto, preco}: ItemProps) => (
  <View style={styles.main}>
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <img src={foto} style={styles.imagemFazenda}></img>
    <Text style={styles.preco}>{preco}</Text>
    <Button
        title="Comprar agora!"
        color="#2A9F85"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  </View>
);

const Item2 = ({title2, foto2, preco2}: ItemProps2) => (
  <View style={styles.main}>
    <View style={styles.item}>
    <Text style={styles.title}>{title2}</Text>
    <img src={foto2} style={styles.imagemFazenda}></img>
    <Text style={styles.preco}>{preco2}</Text>
    <Button
        title="Comprar agora!"
        color="#2A9F85"
        onPress={() => Alert.alert('Adicionado ao carrinho')}
      />
    </View>
  </View>
);


export default function App() {
  const [fonteCarregada] = useFonts({
      "MontserratRegular" : Montserrat_400Regular,
      "MontserratBold" : Montserrat_700Bold,
      "MontserratItalic" : Montserrat_400Regular_Italic
  })

  if(!fonteCarregada){
    return null;
  }
  
  return (
<View>
    <ImageBackground
      source={require('./assets/background2.jpg')}
      style={styles.background}>
    <View>
        <SafeAreaView/>
        <StatusBar/>
        <NavBar/>
        <Instrumento/>
        <SafeAreaView style={styles.container}>
        <View style={styles.main}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} foto={item.foto} preco={item.preco}/>}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item2 title2={item.title2} foto2={item.foto2} preco2={item.preco2}/>}
        keyExtractor={item => item.id2}
      />
      </View>
    </SafeAreaView>
    </View>
    </ImageBackground>
    <View style={styles.container}>
      <Footer />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  main:{
    display: 'flex',
    flexDirection: "row"
  },
  background: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight ?? 0,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#2B2D33',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: "white",
    fontFamily: "MontserratBold"
  },
  imagemFazenda:{
    width: 128,
    height: 128 
  },
  preco:{
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
},
});
