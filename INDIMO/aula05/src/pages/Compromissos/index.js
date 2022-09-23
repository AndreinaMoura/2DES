import { Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';

import style from './style.js'

export default function Home({ navigation }) {
    const data = [
        {
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]
    

    const imagem = require('../../../assets/'+ img.descricao)

    return (
        <ScrollView>{
            data.map((compromisso, indice) => {
                return (
                    <TouchableOpacity style={style.container} key={indice} onPress={() => { navigation.navigate("Descricao", { "descricao": compromisso.descricao }) }}>
                        {/* <Image source={compromisso.imagem}/> */}
                        <Image style={style.img} source={imagem}/>
                        <View style={style.text}>
                        <Text style={style.text2}>{compromisso.nome}</Text>
                        <Text>{compromisso.horario}</Text>
                        </View>           
                    </TouchableOpacity>
                )
            })
        }            
        </ScrollView>
    )
}
