import { View, Text,Image } from 'react-native'
import React from 'react'

const Category = ({ title, img }) => {
    
  return (
    <View style={{width:60,alignItems:'center'}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image style={{
                  width: 60,
                  height: 60,
                  borderWidth:1,
                  borderRadius:16,
                  borderColor:'#e7fbef'
                }} source={{
                  uri: img
                }} />
        </View>
      <Text>{title}</Text>
    </View>
  )
}

export default Category