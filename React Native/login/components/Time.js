import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Time = (props) => {
    const {num,from,to}=props
  return (
    <View style={{flexDirection:'row',padding:'30',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
            <FontAwesome5 name="fan" style={{}} size={26} color="#64b5ae" />
            <Text>x<Text style={{fontSize:20}}>{num}</Text></Text>
        </View>
        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
           <Text style={{fontSize:22}}>{from} am - {to} pm</Text>
        </View>
    </View>
  )
}

export default Time