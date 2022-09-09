import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [dados, setdados] =
    useState([
      {
        nome: 'antonio',
        cargo: 'adm',
      },
      {
        nome: 'jose',
        cargo: 'dr',
      },
      {
        nome: 'ana',
        cargo: 'adm',
      },
    ])
  // dados.forEach((cada) => {
  //   nome = cada.nome
  //   cargo = cada.cargo
  // })
  return (

    <View style={style.container}>
      <TextInput style={style.TextInput} placeholder={"Nome do Func."} onChangeText={(nome) => { setNome(nome); }} />
      <TextInput style={style.TextInput} placeholder={"Cargo"} onChangeText={(cargo) => { setCargo(cargo); }} />
      <View style={style.contem}>
        <TouchableOpacity onPress={() => {

        }}>
          <Text style={style.Text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={style.Text2}>
      <View style={style.Text3}>
          <Text style={style.Text4}>Nome: {dados.nome}</Text>
          <Text style={style.Text4}>Cargo: {dados.cargo}</Text>
        </View>
        <View style={style.Text3}>
          <Text style={style.Text4}>Nome: {dados.nome}</Text>
          <Text style={style.Text4}>Cargo: {dados.cargo}</Text>
        </View>
        <View style={style.Text3}>
          <Text style={style.Text4}>Nome: {nome}</Text>
          <Text style={style.Text4}>Cargo: {cargo}</Text>
        </View>
        <View style={style.Text3}>
          <Text style={style.Text4}>Nome: {dados.nome}</Text>
          <Text style={style.Text4}>Cargo: {dados.cargo}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    border: '3px solid black',
    alignItems: 'center',
    width: '370px',
    height: '662px',
    margin: '2px'
  },
  TextInput: {
    border: '3px solid black',
    width: '350px',
    margin: '10px',
    padding: '5px',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: '22px'
  },
  Text: {
    border: 'none',
    width: '350px',
    fontSize: '22px',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    color: 'white',
    height: '50px',
    textAlign: 'center',
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text2: {
    border: '2px solid black',
    width: '350px',
    maxHeight: '420px',
    marginTop: '10px',
  },
  Text3: {
    border: '2px solid black',
    width: '325px',
    height: '60px',
    margin: '10px',
    padding: '10px',
    justifyContent: 'center',
  },
  Text4: {
    fontWeight: 'bolder',
    fontSize: '16px'
  }
})
