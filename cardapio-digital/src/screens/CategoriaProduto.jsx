import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import { produtosMock } from "../data/produtosMock";

export default function CategoriaProduto({ route }) {
    const { categoria } = route.params;

    // Filtra os produtos pela categoria recebida
    const produtosFiltrados = produtosMock.filter(produto => produto.categoria === categoria);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{categoria.toUpperCase()}</Text>
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.nome}</Text>
                        <Text style={styles.itemDescription}>{item.descricao}</Text>
                        <Text style={styles.itemIngredients}>Ingredientes: {item.ingredientes.join(', ')}</Text>
                        <Text style={styles.itemPreparation}>Preparo: {item.preparo}</Text>
                        <Text style={styles.itemSize}>Tamanho: {item.tamanho}</Text>
                        <Text style={styles.itemType}>Tipo: {item.tipo}</Text>
                        <Text style={styles.itemAvailability}>
                            {item.disponibilidade ? "Disponível" : "Indisponível"}
                        </Text>
                        <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        borderRadius:10,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        elevation: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
    itemIngredients: {
        fontSize: 14,
        color: '#333',
    },
    itemPreparation: {
        fontSize: 14,
        color: '#333',
    },
    itemSize: {
        fontSize: 14,
        color: '#333',
    },
    itemType: {
        fontSize: 14,
        color: '#333',
    },
    itemAvailability: {
        fontSize: 14,
        color: '#28a745',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});