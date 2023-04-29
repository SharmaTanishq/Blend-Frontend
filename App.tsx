import React, { useState } from "react";
import { View,Text,Image,StyleSheet, FlatList } from "react-native";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () =>{
  const [item,setItems] = useState([
    {
      id:uuidv4(),
      text:'Milk'
    },
    {
      id:uuidv4(),
      text:'Eggs'
    },
    {
      id:uuidv4(),
      text:'Bread'
    },
    {
      id:uuidv4(),
      text:'Juice'
    }
  ])

  React.useEffect(()=>{
    console.log('Item',item)
  },[])

  return(
    <View style= {styles.ParentContainer}>

        <Header title={"Shopping List"}/>

          <FlatList
            data={item}
            renderItem={({item})=>( <ListItem item={item}/> )}
          />
        {/* <Text style={styles.ParentText}>Hello World Again!!</Text>
        <Image source={{uri:"https://i.pinimg.com/736x/a0/16/2f/a0162f8d26a87252a21fbe6c2e73aaec.jpg"}}
          style={styles.parentImage}
        ></Image> */}
    </View>
  )

}

const styles = StyleSheet.create({
  ParentContainer:{
    flex:1,
    paddingTop:35
   
  },
  ParentText:{
    color:"darkslateblue",
    fontSize:30

  },
  parentImage:{
    width:200,
    height:200,
    borderRadius:200/2
  }
})

export default App 