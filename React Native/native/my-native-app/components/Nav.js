import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from '@expo/vector-icons/AntDesign';

const Nav = ({navigation}) => {
  return (
    <View style={{flexDirection:'row',height:60,alignItems:'center'}}>
      <AntDesign name="arrowleft" style={{}} size={26} color="green" onPress={()=>navigation.goBack()}/>
        <View style={{flex:1}}>

        <Text style={{fontSize:20,textAlign:'center'}}> Active Generators </Text>
        </View>

    
    </View>
  )
}

export default Nav