import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const index = ({...props}) => {
  return (
    <>
      <Text style={styles.description}>{props.value}</Text>
    </>
  )
}

export default index

const styles = StyleSheet.create({
    description:{
        fontSize:18,
        fontWeight:"200",
        marginBottom:30,
        color:'#FFFFFF'
    }
})