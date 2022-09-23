import { View, Text} from 'react-native';

import style from './style'
import ButtonFinalizar from '../../components/buttonFinalizar/index.js';

export default function ButtonCadastrar({route}) {
    var {descricao} = route.params;

    return(
        <View style={style.container}>
            <Text>Descrição:</Text>
            <Text style={style.text}>{descricao.atv}</Text>
            <Text>Observações:</Text>
            <ButtonFinalizar value="Finalizar Cadastro" />    
        </View>
        
    )
}
