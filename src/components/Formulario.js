import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from "react-native"
import axios from 'axios'

const Formulario = ({ moneda,
    criptoMoneda,
    setMoneda,
    setCriptoMoneda,
    setConsultarAPI }) => {



    const [criptoMonedas, setCriptoMonedas] = useState([])


    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)


            setCriptoMonedas(resultado.data.Data)
            console.log(criptoMonedas)
        }
        consultarAPI()
    }, [])

    // Almacena las selecciones del usuario
    const obtenerMoneda = moneda => {
        setMoneda(moneda)
        console.log(moneda)
    }

    const obtenerCriptomoneda = cripto => {
        setCriptoMoneda(cripto)
        console.log(cripto)
    }

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptoMoneda.trim() === '') {
            mostrarAlerta()
            return
        }

        //Si pasa la validación

        setConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Ambos campos son oblicatorios',
            [
                { text: 'OK' }
            ]
        )
    }

    return (
        <View>

            <Text style={styles.label}>Moneda</Text>
            <Picker

                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label='-- Seleccione --' value='' />
                <Picker.Item label='Dolar de Estados Unidos' value='USD' />
                <Picker.Item label='Peso Argentino' value='ARS' />
                <Picker.Item label='Euro' value='EUR' />
                <Picker.Item label='Libra Esterlina' value='GBP' />

            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptoMoneda}
                onValueChange={criptoMoneda => obtenerCriptomoneda(criptoMoneda)}
            >
                <Picker.Item label='-- Seleccione --' value='' />
                {
                    criptoMonedas.map(cripto => (
                        <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                    ))
                }

            </Picker>
            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={cotizarPrecio}
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Formulario

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar: {
        backgroundColor: '#3D3C40',
        padding: 10,
        marginTop: 20,
        borderRadius: 8
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }

});


/* Para instalar el picker use
npm install @react-native-picker/picker --save
si no anda a la primera reiniciar la app
*/