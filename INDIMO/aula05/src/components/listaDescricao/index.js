import { TouchableOpacity, Text } from "react-native";

import style from "./style.js";

const data = [
    {
        "id_compromisso": 1,
        "descricao":"- Entrega da Atividade.\n- Matéria Nova.",
        "observacoes":"",
    },
    {
        "id_compromisso": 4,
        "descricao":"",
        "observacoes":"Não esquecer a carteirinha !!!",
    },
    {
        "id_compromisso": 3,
        "descricao":"- Pão.\n- Presunto.\n- Queijo.",
        "observacoes":"Ver se o sabão está em promoção e levar uma caixa.",
    },
    {
        "id_compromisso": 2,
        "descricao":"Consulta de retorno.",
        "observacoes":"Levar os exames.",
    },
]


export default function ListaCompromisso({props},{ navigation }) {
    const { onPress } = props;
    data.map((compromisso, indice) => {
        return (
            <TouchableOpacity style={style.container} key={indice} onPress={() => { navigation.navigate("Descricao", { "descricao": compromisso.descricao }) }}>
                <Image style={style.img} source={imagem} />
                <View style={style.text}>
                    <Text style={style.text2}>{compromisso.nome}</Text>
                    <Text>{compromisso.horario}</Text>
                </View>
            </TouchableOpacity>
        )
    })
}