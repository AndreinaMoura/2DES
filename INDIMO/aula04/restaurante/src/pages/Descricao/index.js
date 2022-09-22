import { View, Text, Image, StyleSheet} from 'react-native';

import style from './style'

export default function Descricao({ route }) {
    var {descricao} = route.params;

    return(
        <View style={style.container}>
            <Image style={style.img} source={{uri: descricao.img}} />
            <Text style={style.text}>Endereco: {descricao.endereco}</Text>
            <Text style={style.text}>Telefone: {descricao.telefone}</Text>
        </View>
    )
}
