import { View, TextInput, Image } from 'react-native';

import style from './style'
import ButtonLogin from '../../Components/ButtonLogin/index.js';

import { useState } from 'react';

export default function Login({navigation}) {
    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        },
    ];
    const [value, setValue] = useState();
    const [value1, setValue1] = useState();

    const img = require("../../../assets/logo.png");

    const funcao = () => {

        users.forEach(usuario => {

            if (value == usuario.email && value1 == usuario.senha) {

                navigation.navigate('Home', { 'info': usuario.id })

            } else {

                console.log('Erro')

            }

        })

    }
    return (
        <View style={style.container}>
            <Image style={style.img} source={{ uri: img }} />
            <TextInput style={style.txtInput} placeholder='E-mail' placeholderTextColor="gray" value={value} onChangeText={(val) => { setValue(val) }} />
            <TextInput style={style.txtInput} placeholder='Senha' placeholderTextColor="gray" value={value1} onChangeText={(val1) => { setValue1(val1) }} />
            <ButtonLogin value="Login" onPress={funcao} />
        </View>

    )
}
