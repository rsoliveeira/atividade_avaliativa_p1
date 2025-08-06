// src/screens/CategoriaScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { produtosMock } from '../data/produtosMock';
import CardItem from '../components/CardItem';

export default function CategoriaProduto({ route }) {
  const { categoria } = route.params;

  // Filtra os produtos pela categoria passada
  const itens = produtosMock.filter(produto => produto.categoria === categoria);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoria}</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardItem item={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});