import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductCard = ({title,img,price,weight,onPress,add}) => {
  return (
    <View style={{padding:12,borderWidth:1,borderRadius:16,width:180,borderColor:'#c2c2c2'}} >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}></View>
        <TouchableOpacity onPress={onPress}>

        <Image style={{width:120,height:120,alignSelf:'center',marginBottom:12}} source={{uri :img}} />
        </TouchableOpacity>
      <Text style={{fontWeight:'500'}}>{title} {weight && <Text style={{color:'#c2c2c2'}}>({weight})</Text>} </Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:18,fontWeight:"500"}} onPress={onPress}>₹ {price}</Text>
            <Text style={{fontWeight:'500'}} onPress={add}>Add</Text>

        </View>

    </View>
  )
}

export default ProductCard