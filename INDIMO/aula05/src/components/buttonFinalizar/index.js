import { TouchableOpacity, Text } from "react-native";

import style from "./style.js";

export default function ButtonFinalizar(props) {
    const { value, onPress } = props;

    return (
        <TouchableOpacity style={style.buttonFinalizar} onPress={() => { onPress() }}>
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}