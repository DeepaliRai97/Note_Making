import React,{useContext, useState} from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {Text,FAB,List} from 'react-native-paper';
import Header from '../component/Header'; 
import {Context as NoteContext} from '../context/NoteContext';

function ViewNotes({navigation}){
    //const[notes,setNotes]=useState([])
    const {state,addnote,deletenote} = useContext(NoteContext)
    const addNotes=note=>{
        note.id=state.length+1
        //setNotes([...notes,note])
        addnote(note)
    }
    return(
        <>
        <Header titleText =' Simple Note Taking App'/>
        <View style={styles.container}>
            {state.length===0?(
                 <View style={styles.titleContainer}>
                 <Text style={styles.title}>You do not have any notes</Text>
             </View>
            ):( 
                  <FlatList
                  data={state}
                  renderItem={({item})=>(
                      <List.Item
                       title={item.noteTitle}
                       description={item.noteDescription}
                       descriptionNumberOfLines={1}
                       titleStyle={styles.listTitle}
                       onPress = {() => deletenote(item.id)}
                       />
                  )}
                 keyExtractor={item=>item.id.toString()}
                />
                
            )}
            
            <FAB 
            style={styles.fab}
            small
            icon = 'plus'
            label = 'Add a new Note'
            onPress = {()=>navigation.navigate('AddNotes',{
                addNotes
                })
                }
        />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#fff',
       paddingVertical:20,
       paddingHorizontal:10
    },
    titleContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    title:{
        fontSize:20
    },
    fab:{
        backgroundColor:'#219653',
        position:'absolute',
        margin:20,
        right:0,
        bottom:10
    },
    listTitle:{
        fontSize:20,

    }
})

export default ViewNotes;