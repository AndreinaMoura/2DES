import {TouchableOpacity, Text} from 'react-native';

import style from './style';

export default function ButtonCadastrar(props) {
    const { value, onPress } = props;

    return(
        <TouchableOpacity style={style.button} onPress={()=>{onPress()}}>
            <Text style={style.text}>{value}</Text>
        </TouchableOpacity>
    )
}