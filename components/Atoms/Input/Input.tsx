import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type Props = {}

const Input = ({...props}) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      onChangeText={(text)=>{props.func(text)}}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeHolderColor}      
      >
      </TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer:{    
    flexDirection:'row'
  },
  input: {
    flex:1,
    fontSize:23,
    overflow:'hidden',
    height: 60,
    padding:20,
    borderRadius:20,
    backgroundColor:'#2A2A2A',
    color:'#fff'
  },
})