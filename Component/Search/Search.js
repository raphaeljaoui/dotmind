import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Search = ({search, newList, list, tab, text}) => {
    const handleSearch = (text) => {
        if(text){
            var t = text.toLowerCase()
            const newData = list.filter(item => {
                const itemData = item.first_name ? item.first_name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()

                return itemData.indexOf(textData) > -1
            })
            newList(newData)
            search(text)
        }
        else{
            newList(tab)
            search(text)
        }
    }
    return (
        <TextInput placeholder={"Recherche ..."} 
        style={styles.input} 
        value={text}
        onChangeText={text => {handleSearch(text)}}/>
    )
}

export default Search

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        margin:20,
        padding:15,
        borderRadius:10
    }
})
