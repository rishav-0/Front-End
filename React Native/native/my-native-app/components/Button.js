import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
  const {onPress,title} = props
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'#017f70',padding:20,alignItems:'center',borderRadius:20,width:'100%'}} >
      <Text style={{color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button