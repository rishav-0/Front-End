import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Footer = () => {

  return (
    <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <MaterialIcons name="screen-share" style={{}} size={26} color="#64b5ae" />
        <View style={{height:60,flexDirection:'row',justifyContent:'space-between',gap:8}}>
            <View style={{height:52,width:52,borderRadius:26,backgroundColor:'#4fb0a6',alignItems:'center',justifyContent:'center'}}>
                <Entypo name="location-pin" style={{}} size={26} color="#025b58" />

            </View>
            <View style={{height:52,width:52,borderRadius:26,backgroundColor:'#4fb0a6',alignItems:'center',justifyContent:'center'}}>
                <MaterialCommunityIcons name="flower-tulip" style={{}} size={26} color="#025b58" />

            </View>
            <View style={{height:52,width:52,borderRadius:26,backgroundColor:'#4fb0a6',alignItems:'center',justifyContent:'center'}}>
                <MaterialCommunityIcons name="bell-ring" style={{}} size={26} color="#025b58" />

            </View>
        </View>
            <AntDesign name="pluscircle" style={{}} size={26} color="#025b58" />

    </View>
  )
}

export default Footer