import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import List from './List';

const FlatLists = ({data, fav}) => {
    const favoris = (item) => {
        fav(item)
    }

    return (
        <View>
        {data.map(res => (
            <List key={res.id} item={res}/>
        ))} 
        </View>

    )
}

export default FlatLists

const styles = StyleSheet.create({})
