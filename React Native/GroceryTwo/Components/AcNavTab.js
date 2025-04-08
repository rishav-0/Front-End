import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AcNavTab = ({icon,title, onPress,noborder}) => {
    const offcolor = icon == 'power-off'?'red':'black'
  return (
    <TouchableOpacity onPress={onPress} style={{flex:1,flexDirection:'row',paddingVertical:12,marginBottom:16,justifyContent:'space-between', borderBottomWidth: noborder ? 0:0.5,borderBlockColor:'#999999'}}>
        <View style={{flex:1,flexDirection:'row',gap:8}}>
            <FontAwesome name={icon} size={20} color={offcolor} />
            <Text style={{}}>{title}</Text>
        </View>
            <FontAwesome name={'angle-right'} size={20} color={offcolor} />

    </TouchableOpacity>
  )
}

export default AcNavTab