import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CrearFichas() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sector, setSector] = useState('');
  const [tipoEvento, setTipoEvento] = useState();
  const [totalDeAfectados, setAfectados] = useState('');
  const [totalDeNinosM, setTotalNinosM] = useState('');
  const [totalDeNinosF, setTotalNinosF] = useState('');
  const [totalDeAdultosM, setTotalDeAdultosM] = useState('');
  const [totalDeAdultosF, setTotalDeAdultosF] = useState('');
  const [totalDeAdultoMayorM, setTotalDeAdultoMayorM] = useState('');
  const [totalDeAdultoMayorF, setTotalDeAdultoMayorF] = useState('');
  const [totalDeDanmificados, setTotalDeDanmificados] = useState('');
  const [totalDeAlvergados, setTotalDeAlvergados] = useState('');
  const [totalDeDesaparecidos, setTotalDeDesaparecidos] = useState('');
  const [totalDeFallecidos, setTotalDeFallecidos] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [detalleEmergencia, setDetalleEmergencia] = useState('');
  const [evaluacionNecesidades, setEvaluacionNecesidades] = useState('');
  const [nombreAfectado, setNombreAfectado] = useState('');
  const [rut, setRut] = useState('');
  const [fono, setFono] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [funcionario, setFuncionario] = useState('');
  const handleCheckbox1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheckbox2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };
  const handleCheckbox3 = () => {
    setIsChecked3(true);
    setIsChecked4(false);
    setIsChecked5(false);
  };

  const handleCheckbox4 = () => {
    setIsChecked3(false);
    setIsChecked4(true);
    setIsChecked5(false);
  };

  const handleCheckbox5 = () => {
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(true);
  };
  const handleCheckbox6 = () => {
    setIsChecked6(true);
    setIsChecked7(false);
  };
  const handleCheckbox7 = () => {
    setIsChecked6(false);
    setIsChecked7(true);
  };

  const handleGuardar = () => {
    // Aquí puedes implementar la lógica para guardar la información
    // por ejemplo, enviar la información a una API o almacenarla localmente.
    console.log('Información guardada:', {
      fecha,
      hora,
      sector,
      tipoEvento,
      totalDeAfectados,
      totalDeNinosM,
      totalDeNinosF,
      totalDeAdultosM,
      totalDeAdultosF,
      totalDeAdultoMayorM,
      totalDeAdultoMayorF,
      totalDeDanmificados,
      totalDeAlvergados,
      totalDeDesaparecidos,
      totalDeFallecidos,
      isChecked1,
      isChecked2,
      detalleEmergencia,
      evaluacionNecesidades,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>

        {/* Campo de fecha */}
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la fecha (DD-MM-YYYY)"
            value={fecha}
            onChangeText={(text) => setFecha(text)}
          />
        </View>

        {/* Campo de hora */}
        <View>
          <Text style={styles.label}>Hora:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la hora (HH:mm)"
            value={hora}
            onChangeText={(text) => setHora(text)}
          />
        </View>

        {/* Campo de sector */}
        <View>
          <Text style={styles.label}>Sector:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el sector"
            value={sector}
            label="escoge una opcion para el evento"
            onChangeText={(text) => setSector(text)}
          />
        </View>

        {/* Campo de tipo de evento */}
        {/* Campo de sector */}
        <View>
          <Text style={styles.label}>Tipo de eventor:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el tipo de evento"
            value={tipoEvento}
            label="escoge una opcion para el evento"
            onChangeText={(text) => setTipoEvento(text)}
          />
        </View>
        <Text style={styles.label}>Daños a personas</Text>
        <View>
          <Text style={styles.label}>Total de afectados:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de afectados"
            value={totalDeAfectados}
            onChangeText={(text) => setAfectados(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>niños:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de niños masculinos afectados"
            value={totalDeNinosM}
            onChangeText={(text) => setTotalNinosM(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de niños femeninos afectados"
            value={totalDeNinosF}
            onChangeText={(text) => setTotalNinosF(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Adultos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de adultos masculinos afectados"
            value={totalDeAdultosM}
            onChangeText={(text) => setTotalDeAdultosM(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de adultos femeninos afectados"
            value={totalDeAdultosF}
            onChangeText={(text) => setTotalDeAdultosF(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Adultos mayores:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de adultos mayores masculinos afectados"
            value={totalDeAdultoMayorM}
            onChangeText={(text) => setTotalDeAdultoMayorM(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de adultos mayores femeninos afectados"
            value={totalDeAdultoMayorF}
            onChangeText={(text) => setTotalDeAdultoMayorF(text)}
          />
        </View>
        <View>
        <Text style={styles.label}>Danmificados:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad de danmificados"
          value={totalDeDanmificados}
          onChangeText={(text) => setTotalDeDanmificados(text)}
        />
        </View>
        <View>
        <Text style={styles.label}>Alvergados:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad de alvergados"
          value={totalDeAlvergados}
          onChangeText={(text) => setTotalDeAlvergados(text)}
        />
        </View>
        <View>
        <Text style={styles.label}>Desaparecidos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad de desaparecidos"
          value={totalDeDesaparecidos}
          onChangeText={(text) => setTotalDeDesaparecidos(text)}
        />
        </View>
        <View>
        <Text style={styles.label}>Fallecidos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad de fallecidos"
          value={totalDeFallecidos}
          onChangeText={(text) => setTotalDeFallecidos(text)}
        />
        </View>
        <Text style={styles.label}>Daños a viviendas</Text>
        <Text style={styles.label}>Tipo de daño:</Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>daño menor habitable</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox3}
          >
            <Icon
              name={isChecked3 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked3 ? '#007bff' : '#000'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>daño mayor irrecuperable</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox4}
          >
            <Icon
              name={isChecked4 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked4 ? '#007bff' : '#000'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Destruidas irrecuperable</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox5}
          >
            <Icon
              name={isChecked5 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked5 ? '#007bff' : '#000'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Propiedad:</Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>propietario</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox6}
          >
            <Icon
              name={isChecked6 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked6 ? '#007bff' : '#000'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>arrendada</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox7}
          >
            <Icon
              name={isChecked7 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked7 ? '#007bff' : '#000'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Seguridad:</Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Es seguro</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox1}
          >
            <Icon
              name={isChecked1 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked1 ? '#007bff' : '#000'}
            />
            <Text style={styles.checkboxLabel}>si</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleCheckbox2}
          >
            <Icon
              name={isChecked2 ? 'check-square' : 'square-o'}
              size={24}
              color={isChecked2 ? '#007bff' : '#000'}
            />
            <Text style={styles.checkboxLabel}>no</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Detalle de Emergencia:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Ingrese el detalle de emergencia"
          value={detalleEmergencia}
          onChangeText={(text) => setDetalleEmergencia(text)}
          multiline
          numberOfLines={5} // Puedes ajustar la cantidad de líneas según tus necesidades
        />

        <Text style={styles.label}>Evaluación de Necesidades:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Ingrese la evaluación de necesidades"
          value={evaluacionNecesidades}
          onChangeText={(text) => setEvaluacionNecesidades(text)}
          multiline
          numberOfLines={5}
        />
        <Text style={styles.label}>Identificacion de los afectados</Text>
        <View>
          <Text style={styles.label}>Nombre Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="nombre completo del afectado"
            value={nombreAfectado}
            onChangeText={(text) => setNombreAfectado(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>RUT:</Text>
          <TextInput
            style={styles.input}
            placeholder="ej: 12345678-9"
            value={rut}
            onChangeText={(text) => setRut(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Fono:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el fono de la victima"
            value={fono}
            onChangeText={(text) => setFono(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Domicilio:</Text>
          <TextInput
            style={styles.input}
            placeholder="domicilio del afectado"
            value={domicilio}
            onChangeText={(text) => setDomicilio(text)}
          />
        </View>
        <Text style={styles.label}>Observaciones:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="observaciones de los afectados"
          value={observaciones}
          onChangeText={(text) => setObservaciones(text)}
          multiline
          numberOfLines={5}
        />
      </View>
      <View>
          <Text style={styles.label}>Funcionario de turno:</Text>
          <TextInput
            style={styles.input}
            placeholder="nombre del funcionario de turno para la emergencia"
            value={funcionario}
            onChangeText={(text) => setFuncionario(text)}
          />
        </View>
        <Button title="Guardar" onPress={handleGuardar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    width: 200,
  },
  inputPick: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    width: 200,
    color: 'black',
    backgroundColor: 'white', // Set a background color
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  textArea: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
