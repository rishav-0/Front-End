import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Button = ({title,image,bg,outline,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection:'row',alignItems:"center",justifyContent:'center',gap:8,marginBottom:16,backgroundColor:outline ? null: bg,width:'100%',borderRadius:12,padding:10,height:50,borderWidth:outline ? outline : null}}>
        {
            image && <Image
        source={{ uri: image}}
        style={{ width: 28, height: 28 }}
        />
        }
       
        <Text style={{color:outline ? null :'white',textAlign:'center'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button