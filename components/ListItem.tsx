import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({item}:{item:any}) => {
  return (
    <TouchableOpacity>
    <View>
        <Text style={{
            fontSize:20
        }}>{item.id}</Text>
      <Text>{item.text}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ListItem