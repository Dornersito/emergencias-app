import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Registros() {
  const [fichas, setFichas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    obtenerFichas();
  }, []);

  const handleSearchInputChange = (text) => {
    setSearchText(text);
    // No cerrar el teclado automáticamente
  };

  const obtenerFichas = async () => {
    try {
      const response = await fetch('http://192.168.0.2:5000/api/obtenerDatos');
      const data = await response.json();

      console.log('Datos recibidos de la API:', data);

      setFichas(data);
    } catch (error) {
      console.error('Error al obtener las fichas:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleFilterPress = () => {
    console.log('Filtros aplicados');
    Keyboard.dismiss(); // Importa Keyboard desde 'react-native'
  };
  

  const handleFichaPress = (item) => {
    console.log('Ficha presionada:', item);
    navigation.navigate('DetallesFicha', { ficha: item });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    obtenerFichas();
  };

  const renderFichaItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleFichaPress(item)}>
        <View style={styles.fichaItem}>
          <Text>{`${item.numero_ficha || 'N/A'}`}</Text>
          <Text>{`Nombre Completo: ${item.nombre_completo || 'N/A'}`}</Text>
          <Text>{`Calle: ${item.domicilio || 'N/A'}`}</Text>
          {/* Otros campos de la ficha y afectados según sea necesario */}
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Ficha"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
        <Icon name="filter-list" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <Icon name="refresh" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Lista de Fichas:</Text>
      <FlatList
        data={fichas}
        keyExtractor={(item, index) => (item && item.id_fichaInterna ? item.id_fichaInterna.toString() : index.toString())}
        renderItem={renderFichaItem}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFFFD',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  refreshButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  fichaItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
