import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Darkbtn = ({title}) => {
  return (
   <TouchableOpacity  style={{backgroundColor:'#001c3f',marginBottom:12,borderColor:'#dcdee0',flexDirection:'row',gap:8,padding:22,alignItems:'center',justifyContent:'center',borderRadius:20,width:'100%'}} >
           <Text style={{color:'white'}}>{title}</Text>
        </TouchableOpacity>
  )
}

export default Darkbtn