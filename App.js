import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Instrumentos Musicais</Text>
      <Text style={styles.subtitulo}> Os Instrumentos são separados em famílias: as cordas, madeira, metais e percussão</Text>
      <Text style={styles.subtitulo}> Cordas:</Text>
      <Image style={styles.img} source={require("./img-mobile/cordas.jpg")}/>
      <Text style={styles.subtitulo}>Madeiras:</Text>
      <Image style={styles.img} source={require("./img-mobile/madeiras.jpg")}/>
      <Text style={styles.subtitulo}>Percussão:</Text>
      <Image style={styles.img} source={require("./img-mobile/percussao.jpg")}/>
      <Text style={styles.subtitulo}>Metais:</Text>
      <Image style={styles.img} source={require("./img-mobile/trompa.jpg")}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#4B0082",
    textAlign: "center",
    
  },

  img: {
    borderRadius: 20,
    width: 250,
    height: 250,
    margin: 5,

  },

  titulo: {
    fontSize: 22,
    color: "#FFFFFF",
    fontFamily: "arial",

  },
  subtitulo: {
    fontSize: 16,
    color: "#FFFFFF",
    margin:10,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
