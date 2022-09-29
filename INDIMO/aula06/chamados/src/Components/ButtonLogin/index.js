import { TouchableOpacity, Text } from "react-native";

import style from "./style.js";

export default function ButtonFinalizar(props) {
    const { value, onPress } = props;

    return (
        <TouchableOpacity style={style.buttonLogin} onPress={() => {onPress()}}>
            <Text style={style.txt}>{value}</Text>
        </TouchableOpacity>
    )
}