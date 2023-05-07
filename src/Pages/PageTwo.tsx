import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Atoms/Container/Container'
import { Button, Input, RegistrationDesc, RegistrationHeader } from '../components'

type Props = {}

const PageTwo = ({...props}) => {
    const [value,setValue] = React.useState('')
  const handleClick=()=>{
    value? props.navigation.navigate('AddBirthday'):Alert.alert('Please Enter Value')
  }
  return (
    <Container>
      <RegistrationHeader value={"What's your first name?"}/>
      <RegistrationDesc value={"This will be shown on your profile. You cannot change this later."}/>
      <Input 
          func={setValue}
          value={value}
          placeholder={'First Name'} 
          placeHolderColor={'#808080'} />
      <View style={styles.buttonContainer}>
         <Button title={'Next'} handleClick={handleClick}
         />
      </View>    
    </Container>
  )
}

export default PageTwo

const styles = StyleSheet.create({
    buttonContainer:{
        flex:3,
        display:'flex',
        alignItems:'flex-end',
        paddingBottom:40,
        flexDirection:'row'
    },
})