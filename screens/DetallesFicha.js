import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const DetallesFicha = ({ route }) => {
  const { ficha } = route.params || {};

  const handleExportToPDF = async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1 {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 16px;
              color: #333;
            }
            p {
              font-size: 16px;
              margin-bottom: 8px;
              color: #555;
            }
          </style>
        </head>
        <body>
          <h1>Ficha: ${ficha.numero_ficha || 'N/A'}</h1>
          <p>Fecha: ${ficha.fecha || 'N/A'}</p>
          <!-- Agrega más contenido aquí según tus necesidades -->
        </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: 'Detalles de la Ficha' });
    } catch (error) {
      console.error('Error al generar o compartir el PDF:', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{`Ficha Nº ${ficha.id_ficha || 'N/A'}`}</Text>

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

      <View style={styles.locationBox}>
        <Icon name="map-marker" size={30} color="#555" />
        <View style={styles.locationDetailsContainer}>
          <Text style={styles.locationDetailsLabel}>Ubicacion Emergencia</Text>
          <Text style={styles.locationDetailsText}>{`Latitud: ${ficha.coordenadaLatitud || 'N/A'}`}</Text>
          <Text style={styles.locationDetailsText}>{`Longitud: ${ficha.coordenadaLongitud || 'N/A'}`}</Text>
        </View>
      </View>


      <View style={styles.emergenciaContainer}>
        <Text style={styles.emergenciaTitle}>Detalles de la Emergencia</Text>

        <View style={styles.emergenciaDetailsContainer}>
          <View style={styles.emergenciaDetailsLeft}>
            <Text style={styles.emergenciaDetailsLabel}>Información General</Text>
            <Text>{`ID de Emergencia: ${ficha.id_emergencia || 'N/A'}`}</Text>
            <Text>{`Sector: ${ficha.sector || 'N/A'}`}</Text>
            <Text>{`Tipo: ${ficha.tipo || 'N/A'}`}</Text>
            <Text>{`Daños Siniestro: ${ficha.danos_siniestro || 'N/A'}`}</Text>
            <Text>{`Seguro: ${ficha.seguro || 'N/A'}`}</Text>
            <Text>{`Descripción: ${ficha.descripcion || 'N/A'}`}</Text>
          </View>

          <View style={styles.emergenciaDetailsRight}>
            <Text style={styles.emergenciaDetailsLabel}>Detalles de Afectación</Text>
            <Text>{`Total Afectados: ${ficha.total_afectados || 'N/A'}`}</Text>
            <Text>{`Total Femenino: ${ficha.total_femenino || 'N/A'}`}</Text>
            <Text>{`Total Masculino: ${ficha.total_masculino || 'N/A'}`}</Text>
            <Text>{`Cantidad Adulto: ${ficha.cantidad_adulto|| 'N/A'}`}</Text>
            <Text>{`Cantidad Niños: ${ficha.cantidad_ninos || 'N/A'}`}</Text>
            <Text>{`Cantidad Adulto Mayor: ${ficha.cantidad_adultomayor || 'N/A'}`}</Text>
            <Text>{`Fallecidos: ${ficha.fallecidos || 'N/A'}`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.personalDetailsBox}>
        <View style={styles.iconCircle}>
          <Icon name="user" size={30} color="#555" />
        </View>
        <View style={styles.personalDetailsContainer}>
          <Text style={styles.personalDetailsLabel}>Detalles Personales</Text>
          <Text style={styles.personalDetailsText}>{`Nombre Completo: ${ficha.nombre_completo || 'N/A'}`}</Text>
          <Text style={styles.personalDetailsText}>{`RUT: ${ficha.rut || 'N/A'}`}</Text>
          <Text style={styles.personalDetailsText}>{`Teléfono: ${ficha.telefono || 'N/A'}`}</Text>
          <Text style={styles.personalDetailsText}>{`Sexo: ${ficha.sexo || 'N/A'}`}</Text>
          <Text style={styles.personalDetailsText}>{`Etapa de Vida: ${ficha.etapavida || 'N/A'}`}</Text>
          <Text style={styles.personalDetailsText}>{`Domicilio: ${ficha.domicilio || 'N/A'}`}</Text>
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
  emergenciaDetailsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  emergenciaDetailsLeft: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  emergenciaDetailsRight: {
    flex: 1,
    marginLeft: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  emergenciaDetailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
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
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
  },
  locationDetailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  locationDetailsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#555',
  },
  locationDetailsText: {
    fontSize: 16,
    color: '#333',
  },
  personalDetailsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginLeft:15,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop:20,
  },
  personalDetailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  personalDetailsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:20,
    color: '#555',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30, // La mitad del ancho/altura para hacer un círculo
    backgroundColor: '#ccc', // Puedes ajustar el color de fondo según tus preferencias
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalDetailsText: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333',
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
  exportButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  exportButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  exportButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetallesFicha;
