import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Atoms/Container/Container'
import {Button, Input, RegistrationDesc, RegistrationHeader} from '../components/index'
const PageOne = ({...props}) => {
  
  const [value,setValue] = React.useState('')
  const handleClick=()=>{
    value? props.navigation.navigate('addName'):Alert.alert('Please Enter Value')
  }
  return (
    <Container>
      <RegistrationHeader value={"What's your email?"}/>
      <RegistrationDesc value={"This will not be shown to others. You will be able to change this later."}/>
      <Input 
          func={setValue}
          value={value}
          placeholder={'Email'} 
          placeHolderColor={'#808080'} />
      <View style={styles.buttonContainer}>
         <Button title={'Next'} handleClick={handleClick}
         />
      </View>    
    </Container>
  )
}

export default PageOne

const styles = StyleSheet.create({
  buttonContainer:{
    flex:3,
    display:'flex',
    alignItems:'flex-end',
    paddingBottom:40,
    flexDirection:'row'
},
});