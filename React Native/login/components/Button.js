import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
  const {img,title} = props
  return (
    <TouchableOpacity  style={{borderWidth:2,marginBottom:12,borderColor:'#dcdee0',flexDirection:'row',gap:8,padding:14,alignItems:'center',justifyContent:'center',borderRadius:20,width:'100%'}} >
      <Image 
      style={{width: 36, height: 36}}
      source={{uri: img}} />
      <Text style={{}}>Continue with {title}</Text>
    </TouchableOpacity>
  )
}

export default Button