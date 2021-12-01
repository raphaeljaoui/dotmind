import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Spalsh = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomeScreen")
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Text>Hello Screen</Text>
        </View>
    )
}

export default Spalsh

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
