import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'

const ProductDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView style={{flex:1,backgroundColor:"white",paddingTop:60,paddingHorizontal:22,}}>
        <Image style={{width:200,height:200,alignSelf:'center'}} source={{uri: item.img}} />
        <Text style={{fontSize:18,fontWeight:'500'}}>{item.title}</Text>
        <Text style={{fontSize:18,color:'#c2c2c2',marginBottom:16}}>({item.weight})</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{}}>Description</Text>
            <Text style={{}}>Nutrional info</Text>
            <Text style={{}}>Reviews</Text>
        </View>
        <Text style={{}}>
          {item.d}
        </Text>
    </ScrollView>
  )
}

export default ProductDetail