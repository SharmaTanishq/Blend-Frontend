import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Container = ({ children }:{children:any}) => {
  return (
    <View style={styles.parentContainer}>
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
        
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    parentContainer: {        
        padding:20,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#121212"
      },
      container: {            
        height:'100%',
        overflow:'scroll',
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
      },
})