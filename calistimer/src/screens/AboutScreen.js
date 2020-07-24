import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const AboutScreen = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>CalisTimer</Text>
            <Text style={styles.description}>Este aplicativo foi construtído durante as aulas do curso de ReactJS/React-Native do DevPleno, o devReactJS nos módulos de react-native.</Text>
        </View>
    )
}
AboutScreen.navigationOptions = {
    header: null
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: '#D6304A',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'Ubuntu-Bold', 
        fontSize: 48, 
        textAlign: 'center', 
        color: 'white', 
        marginTop: 111, 
        marginBottom: 111 
    },
    description: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: 'white',
        margin: 20
    }
})
export default AboutScreen