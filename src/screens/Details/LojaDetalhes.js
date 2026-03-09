import { View, Text, Image, Button } from 'react-native';
import { styles } from './StyleDetalhes';

export default function LojaDetalhes({ route, navigation }) {
    const { loja } = route.params;D

    return (
        <View style={styles.container}>
            <Image source={{ uri: loja.imagem }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.nome}>{loja.nome}</Text>
                <Text style={styles.categoria}>{loja.categoria}</Text>
                <Text style={styles.descricao}>Bem-vindo à {loja.nome}! Aqui você encontra {loja.categoria}</Text>

                <Button
                    title="Voltar pra Home"
                    onPress={() => navigation.goBack()}
                    color="#27ae60"
                    />
            </View>
        </View>
    )
}