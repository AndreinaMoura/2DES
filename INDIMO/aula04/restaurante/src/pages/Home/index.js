import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import style from './style'
import ButtonCadastrar from '../../components/buttonCadastrar';
export default function Home({ navigation }) {
    const restaurantes = [
        {
            "nomeRestaurante": "Sabor Caseiro",
            "nota": "10",
            "descricao": {
                "img": "https://img.restaurantguru.com/r7d2-Delivery-Restaurante-Sabor-Caseiro-logo.jpg",
                "endereco": "Rua Bueno",
                "telefone": "(19) 98765-4321"
            }
        },
        {
            "nomeRestaurante": "Albino Restaurant",
            "nota": "8",
            "descricao": {
                "img": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-8b254275713d14eedb860550dc59effa_screen.jpg",
                "endereco": "Rua Espanha",
                "telefone": "(19) 98654-3214"
            }
        },
        {
            "nomeRestaurante": "Casa Sua",
            "nota": "7",
            "descricao": {
                "img": "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
                "endereco": "Rua Maracuja",
                "telefone": "(19) 98845-6321"
            }
        },
    ];
    return (
        <ScrollView>{
            restaurantes.map((restaurante, indice) => {
                return (
                    <TouchableOpacity style={style.container} onPress={() => { navigation.navigate("Descricao", { "descricao": restaurante.descricao }) }}>
                        <Text style={style.text}>Nome do Restaurante: {restaurante.nomeRestaurante}</Text>
                        <Text style={style.text}>Nota: {restaurante.nota}</Text>
                    </TouchableOpacity>
                )
            })
        }
                <ButtonCadastrar value="Cadastrar"/>
            
        </ScrollView>
    )
}
