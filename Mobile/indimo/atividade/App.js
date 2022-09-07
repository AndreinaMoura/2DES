import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [res, setRes] = useState("");
  const [op, setOp] = useState("");

  return (
    <View style={style.container}>
      <TextInput style={style.TextInput} value={value} placeholder={"Primeiro Valor"} onChangeText={(valor) => { setValue(valor); }} />
      <TextInput style={style.TextInput} value={value2} placeholder={"Primeiro Valor"} onChangeText={(valor2) => { setValue2(valor2); }} />
      
        <View style={style.contem}>
        <TouchableOpacity onPress={() => {
        setOp(Number(value) + Number(value2));
      }}>
        <Text style={style.Text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setOp(Number(value) - Number(value2));
      }}>
        <Text style={style.Text}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setOp(Number(value) / Number(value2));
      }}>
        <Text style={style.Text}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setOp(Number(value) * Number(value2));
      }}>
        <Text style={style.Text}>*</Text>
      </TouchableOpacity>
        </View>
      <TouchableOpacity onPress={() => {
        setRes(op)
      }}>
        <Text style={style.Text2}>Calcular</Text>
        <TextInput style={style.Text3} value={"Resultado"}>{res}</TextInput>
      </TouchableOpacity>

    </View >
  );
}

const style = StyleSheet.create({
  container: {
    border:'3px solid black',
    alignItems: 'center',
    width: '370px',
    height:'662px',
    margin: '2px'
},
TextInput: {
  border:'3px solid black',
  width: '300px',
  marginTop: '20px',
  padding: '5px'
},
Text:{
  border:'3px solid black',
  width: '50px',
  height: '40px',
  textAlign: 'center',
  margin: '15px',
  padding: '6px',
},
Text2:{
  border:'3px solid black',
  padding: '5px',
  width: '300px',
  textAlign: 'center'
},
contem:{
  display: "flex",
  flexDirection: "row"
},
Text3:{
  padding: '5px',
  width: '200px',
  textAlign: 'center',
  // padding: "100px"
}
})