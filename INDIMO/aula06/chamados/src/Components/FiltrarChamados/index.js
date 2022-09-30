import { TextInput } from "react-native";

import style from "./style.js";

export default function FiltrarChamados(props) {
    const { value } = props;

    return (
        <TextInput style={style.TextInput} value={value} onChangeText={(val) => { setValue(val) }} />
    )
}