import { View, Text,Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';



const Product = ({price,img,route,name}) => {

  console.log(route,'route');

  return (
    <View style={{backgroundColor:'#fef8e6',borderRadius:16,flex:1,padding:8,maxWidth:180,minWidth:180}}>
        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
            <Icon name="star" size={20} color="#e5ba2c" />
            <Text>56</Text>
        </View>
           
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={route}>
            <Image style={{
              width: 160,
              height: 160,
              marginBottom:16
            }} source={{
              uri: img
            }} 
            />
        </TouchableOpacity >
        
        <View style={{padding:8,backgroundColor:'white',borderRadius:12,justifyContent:'space-between'}}>
            <Text  style={{fontSize:18,fontWeight:'500',fontSize:12,whiteSpace:'no-wrap'}}>{name}</Text>
            <Text  style={{fontSize:18,fontWeight:'500'}}>₹{price}</Text>
        </View>
    </View>
  )
}

export default Product