import { View, Text,TextInput } from 'react-native'
import React from 'react'

const Input = ({title,type,placeholder,}) => {
  return (
    <View style={{flex:1,marginBottom:16}}>
      <Text style={{marginBottom:8}}>{title}</Text>
      <TextInput  placeholder={placeholder} style={{height:50,borderWidth:1,width:'100%',borderRadius:12,borderColor:'#bbbbbb',paddingHorizontal:12}}></TextInput>
    </View>
  )
}

export default Input