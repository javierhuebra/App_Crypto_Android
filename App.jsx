
import React, { useState, useEffect } from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,

  View,
} from 'react-native';

import Header from './src/components/Header';
import Formulario from './src/components/Formulario';
import Cotizacion from './src/components/Cotización';
import axios from 'axios';



const App = () => {

  const [moneda, setMoneda] = useState('')
  const [criptoMoneda, setCriptoMoneda] = useState('')
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        //Consultar la api para obtener la cotización

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        
        
        //cambio el estado para el spinner de carga
        setCargando(true)

        setTimeout(() => {
        
          //resultado.data.DISPLAY[criptoMoneda][moneda] es una forma de acceder porque las claves cambian
          setResultado(resultado.data.DISPLAY[criptoMoneda][moneda])

          setConsultarAPI(false)

          //cambio el estado para el spinner de carga
          setCargando(false)
        }, 3000)
      }

    }

    cotizarCriptomoneda()

  }, [consultarAPI])

  const componente = cargando ? <ActivityIndicator size='large' color='#3D3C40'/> : <Cotizacion resultado={resultado} />

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#3D3C40"
        barStyle='default'
        showHideTransition='none'
        hidden={false}
      />
      <ScrollView>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./src/assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptoMoneda={criptoMoneda}
            setMoneda={setMoneda}
            setCriptoMoneda={setCriptoMoneda}
            setConsultarAPI={setConsultarAPI}

          />

        </View>
        <View style={{marginTop: 40}}>

        </View>
        {componente}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F4EFFF',
    flex: 1
  },
  imagen: {
    width: '100%',
    height: 150
  },
  contenido: {
    marginHorizontal: '2.5%'
  }

});

export default App;
