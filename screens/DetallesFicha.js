// DetallesFicha.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetallesFicha = ({ route }) => {
  const { ficha } = route.params || {};
  const { id_emergencia, comentarios } = ficha.emergencia || {}; // Actualiza para obtener la información de emergencia

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{`Ficha: ${ficha.numero_ficha || 'N/A'}`}</Text>

      <View style={styles.header}>
        <View style={styles.dateTimeBox}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.value}>{ficha.fecha || 'N/A'}</Text>
        </View>
        
        <View style={styles.dateTimeBox}>
          <Text style={styles.label}>Hora:</Text>
          <Text style={styles.value}>{ficha.hora || 'N/A'}</Text>
        </View>
      </View>

      <View style={styles.imageBox}>
        <Text style={styles.label}>Imagenes:</Text>
        {ficha.imagenes &&
          ficha.imagenes.map((imagen, index) => (
            <Image key={index} source={{ uri: imagen }} style={styles.image} />
          ))}
      </View>
        
      <View style={styles.emergenciaContainer}>
        <Text style={styles.emergenciaTitle}>Detalles de la Emergencia</Text>
        <Text>{`ID de Emergencia: ${ficha.id_emergencia || 'N/A'}`}</Text>
        <Text>{`Comentarios: ${comentarios || 'N/A'}`}</Text>
      </View>

      <View style={styles.locationBox}>
        <Icon name="map-marker" size={30} color="#555" />
        <View style={styles.locationDetails}>
        <Text style={styles.label}>Ubicacion Emergencia</Text>
          <Text style={styles.label}>Latitud:</Text>
          <Text style={styles.value}>{ficha.latitud || 'N/A'}</Text>
          <Text style={styles.label}>Longitud:</Text>
          <Text style={styles.value}>{ficha.longitud || 'N/A'}</Text>
        </View>
      </View>
      <View style={styles.personalDetailsBox}>
        <Icon name="user" size={30} color="#555" />
        <View style={styles.personalDetails}>
          <Text style={styles.label}>Nombre Completo:</Text>
          <Text style={styles.value}>{ficha.nombre_completo || 'N/A'}</Text>
          <Text style={styles.label}>RUT:</Text>
          <Text style={styles.value}>{ficha.rut || 'N/A'}</Text>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.value}>{ficha.telefono || 'N/A'}</Text>
          <Text style={styles.label}>Sexo:</Text>
          <Text style={styles.value}>{ficha.sexo || 'N/A'}</Text>
          <Text style={styles.label}>Etapa de Vida:</Text>
          <Text style={styles.value}>{ficha.etapavida || 'N/A'}</Text>
          <Text style={styles.label}>Domicilio:</Text>
          <Text style={styles.value}>{ficha.domicilio || 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 55,
    marginBottom: 16,
    color: '#333',
  },
  emergenciaContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  emergenciaTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  dateTimeBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
  },
  imageBox: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  locationDetails: {
    marginLeft: 10,
  },
  personalDetailsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  personalDetails: {
    marginLeft: 10,
  },
  fichaDetails: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 16,
  },
  section: {
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default DetallesFicha;
