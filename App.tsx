import React, { useState } from "react";
import { View,Text,Image,StyleSheet, FlatList, Button } from "react-native";

import 'react-native-get-random-values';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./screens/OnBoarding";


function HomeScreen({navigation}:{navigation:any}){
  const handleClick=()=>{
    console.log("Custom Click Log",navigation)
  }
  return(
    <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title=" Button" onPress={()=>navigation.navigate('Details Screen')}></Button>
    </View>
  )
}
function DetailsScreen({navigation}:{navigation:any}){
  console.log(navigation)
  return(
    <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title=" Go to details ... Again!" 
        onPress={()=>navigation.push('Details Screen')}></Button>
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
const App = () =>{
 const Stack = createNativeStackNavigator()

  // React.useEffect(()=>{
  //   console.log('Item',item)
  // },[])

  return(
    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="onboarding"  component={OnBoarding} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" options={{title:"First Page"}}>
          {(props) => <HomeScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Details Screen" component={DetailsScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
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