import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native"

const Cotizacion = ({ resultado }) => {

    //Esto es una forma de comprobar si el objeto viene vacio
    if (Object.keys(resultado).length === 0) return null

    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>

            <Text style={styles.texto}>Precio más alto del día: {''}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>

            <Text style={styles.texto}>Precio más bajo del día: {''}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>

            <Text style={styles.texto}>Variación últimas 24 horas: {''}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
            </Text>

            <Text style={styles.texto}>Última actualización: {''}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>

        </View>



    )
}

export default Cotizacion

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: 'white',
        padding: 20,
        
    },
    texto: {
        color: '#3D3C40',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio:{
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black',
    }

});