import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const CartItems = ({img}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,paddingBottom:14,borderColor:'#c2c2c2'}}>
        <View style={{flex:1,flexDirection:'row',gap:22}}>
            <View style={{width:80,height:100,padding:4}}>
                <Image style={{width:"100%",height:'100%',alignSelf:'center',marginBottom:12}} source={{uri :img}} />
            </View>

            <View style={{justifyContent:'space-between',flex:1}}>
                <Text style={{fontSize:18}}>Nestle Corn Flekes</Text>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'500'}}>INR 200</Text>

                    <View style={{width:100,flexDirection:'row',gap:16,alignItems:'center'}}>
                        <View style={{borderWidth:1,borderRadius:6,borderColor:'#c2c2c2'}}>
                            <Entypo name="minus" size={24} color="black" />
                        </View>
                        <Text style={{fontSize:20}}>1</Text>
                        <View style={{borderWidth:1,borderRadius:6,borderColor:'#c2c2c2'}}>
                            <Entypo name="plus" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CartItems