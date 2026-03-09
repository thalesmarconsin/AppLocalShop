import { View, Text, FlatList, StyleSheet } from "react-native";
import LojaCard from "../../components/LojaCards";
import { LOJAS } from "../../data/mockData";
import { styles } from "./StyleHome";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Time da FURIA</Text>
            <FlatList
                data={LOJAS}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <LojaCard loja={item} />}
                contentContainerStyle={styles.list}
                />
        </View>
    ); 
}
