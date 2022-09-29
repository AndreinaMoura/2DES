import { View, Text } from 'react-native';

import style from './style'
import FiltrarChamados from '../../components/FiltrarChamados/index.js';
import ListarChamados from '../../components/ListarChamados/index.js';

export default function Home({routes}) {
    // const chamados = [
    //     {
    //         "user_id": 1,
    //         "chamados": [
    //             {
    //                 "titulo": "Manutenção de Roteador",
    //                 "descricao": "Cliente reclamou que está sem internet, possível troca"
    //             },
    //             {
    //                 "titulo": "Mudança de Endereço",
    //                 "descricao": "Fazer a instalação na nova instalação"
    //             },
    //             {
    //                 "titulo": "Recolher equipamento",
    //                 "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
    //             },
    //         ],
    //     },
    //     {
    //         "user_id": 2,
    //         "chamados": [
    //             {
    //                 "titulo": "Recolher equipamento",
    //                 "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
    //             },
    //             {
    //                 "titulo": "Mudança de Endereço",
    //                 "descricao": "Fazer a instalação na nova instalação"
    //             },
    //             {
    //                 "titulo": "Manutenção de Roteador",
    //                 "descricao": "Cliente reclamou que está sem internet, possível troca"
    //             },
    //         ],
    //     },
    // ];
    return (
        <View style={style.container}>
            <FiltrarChamados />
            <ListarChamados/>
            {/* <ButtonFinalizar value="Finalizar Cadastro" />     */}
        </View>
    )
}
