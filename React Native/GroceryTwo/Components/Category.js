import { View, Text ,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({img,title,onPress,select}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'white',borderColor:select ? 'black':'#c2c2c2',borderWidth:1,borderRadius:12,alignItems:'center',padding:8,width:84,height:84,justifyContent:'space-between'}}>
        <Image style={{width:'40',height:'40'}} source={{uri: img}} />
      <Text style={{fontSize:12}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Category