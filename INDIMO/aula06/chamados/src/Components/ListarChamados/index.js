import { TouchableOpacity, Text } from "react-native";

import style from "./style.js";

export default function ButtonFinalizar(props) {
    const { value } = props;

    return (
        <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.txt}>{value}</Text>
        </TouchableOpacity>
    )
}