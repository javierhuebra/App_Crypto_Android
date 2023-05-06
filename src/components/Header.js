import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native"

const Header = () => {


    return (

        <Text style={styles.encabezado}>Crypto Check</Text>

    )

}

export default Header

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios'? 50 : 10,
        paddingBottom: 10,
        fontFamily: 'Lato-Black',
        color: 'white',
        backgroundColor: '#3D3C40',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
    },

});

/* colores
#3D3C40 principal

#7A7880 gris uno
#B7B4BF gris dos

#B7B4BF gris tres
#F4EFFF gris claro */

/* Para instalar la fuente una vez que se creo el
archivo react-native.config.js se corre este comando
npx react-native-asset   */  