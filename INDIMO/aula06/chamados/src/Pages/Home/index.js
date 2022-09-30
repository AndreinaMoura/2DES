import { View, Text } from 'react-native';

import style from './style'
import FiltrarChamados from '../../components/FiltrarChamados/index.js';
import ListarChamados from '../../components/ListarChamados/index.js';

export default function Home({ route }) {
    const { info } = route.params;
    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                },
            ],
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                },
            ],
        },
    ];
    return (
        chamados[info - 1].chamados.map((item, index) => {
            return (
                <View style={style.container} key={index}>
                    <FiltrarChamados />
                    <Text>{item.titulo}</Text>
                    <Text>{item.descricao}</Text>
                </View>
            )
        })
    )
}
