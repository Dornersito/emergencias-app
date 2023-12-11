import React, { useState, useEffect } from 'react';
import {Alert, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import NumericInput from '../assets/components/NumericInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import CheckBoxWithLabel from '../assets/components/CheckBoxWithLabel';
import { API_BASE_URL } from '../config/config.js';
import { useNavigation } from '@react-navigation/native';


export default function CrearFichas() {
  const [numeroFicha, setNumeroFicha] = useState();
  const [titulo, setTitulo] = useState(`Ficha`);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sector, setSector] = useState('');
  const [tipoEvento, setTipoEvento] = useState([]);
  const [totalDeAfectados, setAfectados] = useState(0);
  const [totalDeNinosM, setTotalNinosM] = useState(0); 
  const [totalDeNinosF, setTotalNinosF] = useState(0); 
  const [totalDeAdultosM, setTotalDeAdultosM] = useState(0); 
  const [totalDeAdultosF, setTotalDeAdultosF] = useState(0); 
  const [totalDeAdultoMayorM, setTotalDeAdultoMayorM] = useState(0); 
  const [totalDeAdultoMayorF, setTotalDeAdultoMayorF] = useState(0);
  const [totalDeDanmificados, setTotalDeDanmificados] = useState(0); 
  const [totalDeAlvergados, setTotalDeAlvergados] = useState(0); 
  const [totalDeDesaparecidos, setTotalDeDesaparecidos] = useState(0); 
  const [totalDeFallecidos, setTotalDeFallecidos] = useState(0); 
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
  const [isCheckedHombre, setIsCheckedHombre] = useState(false);
  const [isCheckedMujer, setIsCheckedMujer] = useState(false);
  const [isCheckedNino, setIsCheckedNino] = useState(false);
  const [isCheckedAdulto, setIsCheckedAdulto] = useState(false);
  const [isCheckedAdultoMayor, setIsCheckedAdultoMayor] = useState(false);
  const [tipoDano, setTipoDano] = useState('');
  const [sexo, setSexo] = useState(''); // Variable para almacenar el sexo
  const [etapaVida, setEtapaVida] = useState(''); // Variable para almacenar la etapa de vida
  const navigation = useNavigation();


  const resetState = () => {
    setTitulo('Ficha')
    setFecha('');
    setHora('');
    setSector('');
    setTipoEvento([]);
    setAfectados(0);
    setTotalNinosM(0);
    setTotalNinosF(0);
    setTotalDeAdultosM(0);
    setTotalDeAdultosF(0);
    setTotalDeAdultoMayorM(0);
    setTotalDeAdultoMayorF(0);
    setTotalDeDanmificados(0);
    setTotalDeAlvergados(0);
    setTotalDeDesaparecidos(0);
    setTotalDeFallecidos(0);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setDetalleEmergencia('');
    setEvaluacionNecesidades('');
    setNombreAfectado('');
    setRut('');
    setFono('');
    setDomicilio('');
    setObservaciones('');
    setFuncionario('');
  };

  useEffect(() => {
    const currentFecha = moment().format('DD-MM-YYYY');
    const currentHora = moment().format('HH:mm');
    setFecha(currentFecha);
    setHora(currentHora);
  }, []);

  const obtenerProximoIdFicha = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/obtenerDatos`);
      if (response.ok) {
        const data = await response.json();
        const cantidadTotalFichas = data.cantidad_total_fichas;
        
        // Utilizar la forma de función para garantizar el valor más reciente
        setNumeroFicha((prevNumeroFicha) => prevNumeroFicha + 1);
      } else {
        console.error('Error al obtener la cantidad total de fichas.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  

  const handleTipoEventoPress = (option) => {
    const newTipoEvento = [...tipoEvento];
  
    const index = newTipoEvento.indexOf(option);
  
    if (index !== -1) {
      newTipoEvento.splice(index, 1);
    } else {
      newTipoEvento.push(option);
    }
  
    setTipoEvento(newTipoEvento);
  };
  
  const renderTipoEventoOptions = (options) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.checkbox, tipoEvento.includes(option) ? styles.checkedOption : null]}
        onPress={() => handleTipoEventoPress(option)}
      >
        <Icon
          name={tipoEvento.includes(option) ? 'check-square' : 'square-o'}
          size={24}
          color={tipoEvento.includes(option) ? '#007bff' : '#000'}
        />
        <Text style={styles.checkboxLabel}>{option}</Text>
      </TouchableOpacity>
    ));
  };  
  
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

  const handleCheckboxHombre = () => {
    setIsCheckedHombre(true);
    setIsCheckedMujer(false);
    setSexo('Hombre');
  };
  
  const handleCheckboxMujer = () => {
    setIsCheckedHombre(false);
    setIsCheckedMujer(true);
    setSexo('Mujer');
  };
  
  const handleCheckboxNino = () => {
    setIsCheckedNino(true);
    setIsCheckedAdulto(false);
    setIsCheckedAdultoMayor(false);
    setEtapaVida('Niño');
  };
  
  const handleCheckboxAdulto = () => {
    setIsCheckedNino(false);
    setIsCheckedAdulto(true);
    setIsCheckedAdultoMayor(false);
    setEtapaVida('Adulto');
  };
  
  const handleCheckboxAdultoMayor = () => {
    setIsCheckedNino(false);
    setIsCheckedAdulto(false);
    setIsCheckedAdultoMayor(true);
    setEtapaVida('Adulto Mayor');
  };

  const handleGuardar = async () => {
    const fechaActual = moment().format('YYYY-MM-DD');
    const horaActual = moment().format('HH:mm:ss');

    // if (
    //   sector.trim() === '' ||
    //   nombreAfectado.trim() === '' ||
    //   rut.trim() === '' ||
    //   fono.trim() === '' ||
    //   domicilio.trim() === ''
    // ) {
    //   Alert.alert('Por favor, complete todos los campos obligatorios (*).');
    //   return;
    // }
      
    const data = {
      ficha_interna: {
        id_ficha:Math.floor(Math.random() * 1000) + 1,
        fecha: fechaActual,
        hora: horaActual,
      },
      emergencias: {
        id_emergencia: Math.floor(Math.random() * 1000) + 1, // Genera un ID de emergencia aleatorio
        id_ficha:Math.floor(Math.random() * 1000) + 1,
        sector: sector,
        coordenadaLatitud: '', // Ajusta según lo que tengas disponible
        coordenadaLongitud: '', // Ajusta según lo que tengas disponible
        tipo: tipoEvento.join(','), // Convierte el array en una cadena separada por comas
        descripcion: detalleEmergencia,
        danos_siniestro: getDanosSiniestro(), // Ajusta según lo que tengas disponible
        propiedad:getTipoPropiedad(),
        evaluacion_emergencias: evaluacionNecesidades,
        damnificados: totalDeDanmificados,
        total_afectados: totalDeAfectados,
        total_femenino: totalDeNinosF + totalDeAdultosF + totalDeAdultoMayorF,
        total_masculino: totalDeNinosM + totalDeAdultosM + totalDeAdultoMayorM,
        cantidad_ninos: totalDeNinosM + totalDeNinosF,
        cantidad_adulto: totalDeAdultosM + totalDeAdultosF,
        cantidad_adultomayor: totalDeAdultoMayorM + totalDeAdultoMayorF,
        fallecidos: totalDeFallecidos,
        seguro: isChecked1,
      },
      afectado: {
        id_afectado: Math.floor(Math.random() * 1000) + 1, // Genera un ID de afectado aleatorio
        nombre_completo: nombreAfectado,
        rut: rut,
        id_emergencia: Math.floor(Math.random() * 1000) + 1, // Genera un ID de emergencia aleatorio
        domicilio: domicilio,
        telefono: fono,
        sexo: sexo,
        etapavida: etapaVida,
        tipodano: tipoDano, // Ajusta según lo que tengas disponible
      },
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/insertarDatos/fichas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Información guardada exitosamente.');
        resetState(); // Restablece los estados después de guardar
        Alert.alert('Ficha guardada!');
        navigation.navigate('Home', { screen: 'Home' });
        

      } else {
        console.log(response);
        console.error('Error al intentar guardar la información.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }; 
  
  const getDanosSiniestro = () => {
    if (isChecked3) {
      return 'Daño menor habitable';
    } else if (isChecked4) {
      return 'Daño mayor irrecuperable';
    } else if (isChecked5) {
      return 'Destruidas irrecuperables';
    } else {
      return '';
    }
  };

  const getTipoPropiedad = () => {
    if (isChecked6) {
      return 'Propietario';
    } else if (isChecked7) {
      return 'Arrendada';
    } else {
      return ''; // or handle the case when no option is selected
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
  
        {/* Contenedor para Fecha y Hora */}
        <View style={styles.dateTimeContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.value}>{fecha}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={[styles.label]}>Hora:</Text>
            <Text style={styles.value}>{hora}</Text>
          </View>
        </View>
   
        <View style={styles.separator}></View>
  
        {/* Campo de sector */}
        <View>
          <Text style={styles.subtitulo}>Sector (*)</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="Ingrese el sector"
            value={sector}
            onChangeText={(text) => setSector(text)}
          />
        </View>

        <View style={styles.separator}></View>

        {/* Campo de tipo de evento en dos columnas */}
        <Text style={styles.subtitulo}>Tipo de evento (*)</Text>
        <View style={styles.tipoEventoContainer}>
          <View style={styles.column}>{renderTipoEventoOptions(["Incendio Estructural", "Incendio Forestal", "Inundación", "Caida de Árbol", "Derrumbes", "Deslizamiento", "Sismo"])}</View>
          <View style={styles.column}>{renderTipoEventoOptions(["Emergencia Sanitaria", "Actividad Volcánica", "Accidente de Tránsito", "Derrame de Sustancias", "Emanación de Gas", "Corte de Energía Eléctrica", "Corte de Agua"])}</View>
        </View>
        {/* Campo "Otro" */}
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Otro:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese otro tipo de evento"
            value={tipoEvento.includes("Otro") ? tipoEvento.find((t) => t === "Otro") : ""}
            onChangeText={(text) => handleTipoEventoPress("Otro")}
          />
        </View>

        <View style={styles.separator}></View>
  
        {/* Daños a persoans*/}

        <Text style={styles.subtitulo}>Daños a personas</Text>
        <View style={styles.rowContainer2}>
          <Text style={styles.label}>Total de afectados:</Text>
          <NumericInput
            value={totalDeAfectados.toString()}
            onIncrement={() => setAfectados((prev) => prev + 1)}
            onDecrement={() => setAfectados((prev) => (prev > 0 ? prev - 1 : 0))}
            onChange={(text) => setAfectados(parseInt(text, 10))}
          />
        </View>
        <View style={styles.separator2}></View>
        <View>
          <Text style={styles.label}>Niños:</Text>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Masculinos:</Text>
            <NumericInput
              value={totalDeNinosM}
              onIncrement={() => setTotalNinosM((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalNinosM((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalNinosM(text)}
            />
          </View>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Femeninos:</Text>
            <NumericInput
              value={totalDeNinosF}
              onIncrement={() => setTotalNinosF((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalNinosF((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalNinosF(text)}
            />
          </View>
        </View>
        <View style={styles.separator2}></View>
        <View>
          <Text style={styles.label}>Adultos:</Text>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Masculinos:</Text>
            <NumericInput
              value={totalDeAdultosM}
              onIncrement={() => setTotalDeAdultosM((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalDeAdultosM((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalDeAdultosM(text)}
            />
          </View>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Femeninos:</Text>
            <NumericInput
              value={totalDeAdultosF}
              onIncrement={() => setTotalDeAdultosF((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalDeAdultosF((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalDeAdultosF(text)}
            />
          </View>
        </View>
        <View style={styles.separator2}></View>
        <View>
          <Text style={styles.label}>Adultos mayores:</Text>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Masculinos:</Text>
            <NumericInput
              value={totalDeAdultoMayorM}
              onIncrement={() => setTotalDeAdultoMayorM((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalDeAdultoMayorM((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalDeAdultoMayorM(text)}
            />
          </View>
          <View style={styles.rowContainer2}>
            <Text style={styles.label}>Femeninos:</Text>
            <NumericInput
              value={totalDeAdultoMayorF}
              onIncrement={() => setTotalDeAdultoMayorF((prev) => parseInt(prev, 10) + 1)}
              onDecrement={() => setTotalDeAdultoMayorF((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
              onChange={(text) => setTotalDeAdultoMayorF(text)}
            />
          </View>
        </View>
        <View style={styles.separator2}></View>
        <View style={styles.rowContainer2}>
          <Text style={styles.label}>Damnificados:</Text>
          <NumericInput
            value={totalDeDanmificados}
            onIncrement={() => setTotalDeDanmificados((prev) => parseInt(prev, 10) + 1)}
            onDecrement={() => setTotalDeDanmificados((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
            onChange={(text) => setTotalDeDanmificados(text)}
          />
        </View>

        <View style={styles.rowContainer2}>
          <Text style={styles.label}>Alvergados:</Text>
          <NumericInput
            value={totalDeAlvergados}
            onIncrement={() => setTotalDeAlvergados((prev) => parseInt(prev, 10) + 1)}
            onDecrement={() => setTotalDeAlvergados((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
            onChange={(text) => setTotalDeAlvergados(text)}
          />
        </View>


        <View style={styles.rowContainer2}>
          <Text style={styles.label}>Desaparecidos:</Text>
          <NumericInput
            value={totalDeDesaparecidos}
            onIncrement={() => setTotalDeDesaparecidos((prev) => parseInt(prev, 10) + 1)}
            onDecrement={() => setTotalDeDesaparecidos((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
            onChange={(text) => setTotalDeDesaparecidos(text)}
          />
        </View>

        <View style={styles.rowContainer2}>
          <Text style={styles.label}>Fallecidos:</Text>
          <NumericInput
            value={totalDeFallecidos}
            onIncrement={() => setTotalDeFallecidos((prev) => parseInt(prev, 10) + 1)}
            onDecrement={() => setTotalDeFallecidos((prev) => (parseInt(prev, 10) > 0 ? parseInt(prev, 10) - 1 : 0))}
            onChange={(text) => setTotalDeFallecidos(text)}
          />
        </View>

        <View style={styles.separator}></View>

        <Text style={styles.subtitulo}>Daños a viviendas</Text>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Daño menor habitable" isChecked={isChecked3} onPress={handleCheckbox3} />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Daño mayor irrecuperable" isChecked={isChecked4} onPress={handleCheckbox4} />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Destruidas irrecuperables" isChecked={isChecked5} onPress={handleCheckbox5} />
        </View>

        <Text style={styles.label}>Propiedad (*):</Text>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Propietario" isChecked={isChecked6} onPress={handleCheckbox6} />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Arrendada" isChecked={isChecked7} onPress={handleCheckbox7} />
        </View>

        <Text style={styles.label}>Seguro (*):</Text>

        <View style={styles.checkboxContainer}>
          <CheckBoxWithLabel label="Tiene seguro" isChecked={isChecked1} onPress={handleCheckbox1} />
          <CheckBoxWithLabel label="No tiene seguro" isChecked={isChecked2} onPress={handleCheckbox2} />
        </View>

        <View style={styles.separator}></View>

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

        <View style={styles.separator}></View>

        <Text style={styles.subtitulo}>Identificacion de los afectados</Text>
        <View>
          <Text style={styles.label}>Nombre Completo (*):</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="Nombre del afectado"
            value={nombreAfectado}
            onChangeText={(text) => setNombreAfectado(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>RUT (*):</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="ej: 12345678-9"
            value={rut}
            onChangeText={(text) => setRut(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Fono (*):</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="Ingrese el fono de la victima"
            value={fono}
            onChangeText={(text) => setFono(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Domicilio (*):</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="Domicilio del afectado" 
            value={domicilio}
            onChangeText={(text) => setDomicilio(text)}
          />
        </View>
        <Text style={styles.label}>Observaciones:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Observaciones de los afectados"
          value={observaciones}
          onChangeText={(text) => setObservaciones(text)}
          multiline
          numberOfLines={5}
        />
      </View>
      <View style={styles.checkboxContainer}>
      <Text style={styles.label}>Sexo:</Text>
        <CheckBoxWithLabel label="Hombre" isChecked={isCheckedHombre} onPress={handleCheckboxHombre} />
        <CheckBoxWithLabel label="Mujer" isChecked={isCheckedMujer} onPress={handleCheckboxMujer} />
      </View>

      <View style={styles.checkboxContainer}>
      <Text style={styles.label}>Etapa de vida: </Text>
        <CheckBoxWithLabel label="Niño" isChecked={isCheckedNino} onPress={handleCheckboxNino} />
        <CheckBoxWithLabel label="Adulto" isChecked={isCheckedAdulto} onPress={handleCheckboxAdulto} />
        <CheckBoxWithLabel label="Adulto Mayor" isChecked={isCheckedAdultoMayor} onPress={handleCheckboxAdultoMayor} />
      </View>

      <View>
        <Text style={styles.label}>Tipo de Daño (*):</Text>
        <TextInput
          style={styles.largeInput}
          placeholder="Ingrese el tipo de daño"
          value={tipoDano}
          onChangeText={(text) => setTipoDano(text)}
        />
      </View>
      <View>
          <Text style={styles.label}>Funcionario de turno (*):</Text>
          <TextInput
            style={styles.largeInput}
            placeholder="Nombre del funcionario"
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitulo:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  separator2: {
    height: 1,
    backgroundColor: 'blue',
    marginVertical: 10,
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',  // Espacio entre el texto y el cuadrado
    width: '100%',  // Ocupa el 100% del ancho disponible
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  largeInput: {
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    width: '90%',
  },
  tipoEventoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  column: {
    flex: 1,
  },
  checkedOption: {
    backgroundColor: '#e6f7ff',  // Cambia el color de fondo cuando está seleccionado
  },
  numericInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numericInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    width: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginLeft: 10,
    marginTop:10,
    marginRight:15,
    fontSize: 16,
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
    backgroundColor: 'white',
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
