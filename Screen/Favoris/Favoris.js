import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import FlatLists from '../../Component/FlatList/FlatList'

const Favoris = ({favoris}) => {
    console.log(favoris);
    if(typeof favoris)
        return (
            <View style={styles.margin}>
                <FlatLists data={favoris}/>
            </View>
        )
    else{
        return(
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text>Favoris</Text>
            </View>
        )
    }
}

const mapStateToProps = state => state;
const connectComponent = connect(mapStateToProps, undefined)
export default connectComponent(Favoris)

const styles = StyleSheet.create({
    margin:{
        marginLeft:20,
        marginRight:20,
    }
})