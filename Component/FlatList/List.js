import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {Value} from '../../useContext'
import * as Types from '../../store/types'
const List = ({item, addFavoris, favoris}) => {
    const [bool, setbool] = useState(false)
    const test = useContext(Value)

    const favorisRedux = () => {
        var image;
        
        if(bool){
            image = require('../../image/coeur2.png')
            addFavoris(item)
        }
        else{
            image = require('../../image/coeur.png')
        }
        return image;

    }
    
    return (
        <View style={styles.container}>
            <View  style={{flexDirection:"row"}}>
                <View>
                    <Image source={{uri: item.avatar}} style={{width:60, height:60, borderRadius:10}}/>
                </View>
                <View style={styles.textBlock}>
                    <Text style={styles.nameTitle}>{item.first_name} {item.last_name}</Text>
                    <Text>{item.email}</Text>
                </View>
            </View>
            <View style={styles.favoris}>
                <TouchableOpacity onPress={() => setbool(!bool)}>
                    <Image source={favorisRedux()} style={{width:30, height:30}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    addFavoris: (favoris) => dispatch({type: Types.ADD_FAVORIS, payload:{
        favoris,
    }}),
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps)
export default connectComponent(List)

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        marginTop:10,
        borderRadius:10
    },
    textBlock:{
        padding:10
    },

    nameTitle:{
        fontSize:20
    },

    favoris:{
        justifyContent:"center"
    }
})
