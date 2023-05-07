import { View, Text,Image ,StyleSheet, Dimensions} from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PageOne from './Pages/PageOne'
import { SvgUri } from 'react-native-svg'
import SvgComponent from '../assets/images/Icon'
import PageTwo from './Pages/PageTwo'
import PageThree from './Pages/PageThree'


function LogoTitle(props:any) {
 
    return (
       <View style={{width:"100%",height:50,alignItems:'center',justifyContent:'flex-start',display:'flex',maxWidth:250}}>
        <SvgComponent />
       </View>
    );
  }

const OnBoarding = () => {
    const Stack = createNativeStackNavigator()
  return (
    
     <Stack.Navigator
        screenOptions={{ 
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTitle: (props) => <LogoTitle {...props}  />}}>
        
            <Stack.Screen name='addEmail' component={PageOne} ></Stack.Screen>
            <Stack.Screen name='addName' component={PageTwo} ></Stack.Screen>
            <Stack.Screen name='addBirthday' component={PageThree} ></Stack.Screen>
        
     </Stack.Navigator>
    
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });