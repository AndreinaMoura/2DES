import { TouchableOpacity, Text } from 'react-native';

import style from './style';

export default function ButtonCadastrar(props) {
    const { value, onPress } = props;

    return (
        <TouchableOpacity style={style.container} onPress={() => { navigation.navigate("Descricao", { "descricao": restaurante.descricao }) }}>
            <Text style={style.text}>Nome do Restaurante: {restaurante.nomeRestaurante}</Text>
            <Text style={style.text}>Nota: {restaurante.nota}</Text>
        </TouchableOpacity>
    )
}