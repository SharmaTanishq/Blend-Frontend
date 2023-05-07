import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const index = ({...props}) => {
  return (
    <>
      <Text style={styles.header}>{props.value}</Text>
    </>
  )
}

export default index

const styles = StyleSheet.create({
    header:{
        fontSize:32,
        marginBottom:15,
        color:'#FFFFFF'
    }
})