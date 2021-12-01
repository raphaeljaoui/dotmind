import React,{useState, useEffect} from 'react'
import {ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { getUser } from '../../Api/Api'
import FlatLists from '../../Component/FlatList/FlatList'
import Search from '../../Component/Search/Search'
import * as Types from '../../store/types'
import { Value } from '../../useContext';

const Home = ({addFavoris}) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [textSearch, settextSearch] = useState("")
    const [list, setList] = useState([])
    const [tab, setTab] = useState([])
    const [index,setindex] = useState(1)
    const [item, setitem] = useState([])

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log(index);
            index === 1 ? setindex(2) : setindex(1)
            setRefreshing(false)
        },2000)
      };

    useEffect(() => {
        getUser(index)
        .then(res => {
            setList(res.data)
            setTab(res.data)
        })
    }, [index])

    useEffect(()=>{
        addFavoris(item)
    }, [item])

    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />}

            style={{flex:1}}
            >
            <View style={{flex:1}}>
                <Search search={settextSearch} list={list} newList={setList} tab={tab} text={textSearch}/>
            </View>
            <View style={styles.margin}>
                <Value.Provider value={addFavoris}>
                    <FlatLists data={list}/>
                </Value.Provider>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    addFavoris: (favoris) => dispatch({type: Types.ADD_FAVORIS, payload:{
        favoris,
    }}),
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps)
export default connectComponent(Home)

const styles = StyleSheet.create({
    margin:{
        marginLeft:20,
        marginRight:20,
        flex:3
    }
})
