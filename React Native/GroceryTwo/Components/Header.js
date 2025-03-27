import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <>
           <Text style={{color:'#c2c2c2'}}>Deliver to</Text>
          <Text style={{color:'#3c966d',marginBottom:16}}>Maligaon, Guwahati</Text>
          <View style={{marginBottom:16,flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
            <View >
                <Text style={{fontWeight:'500'}}>Hello Rishav</Text>
                <Text style={{color:'#c2c2c2'}}>What are you getting from us today?</Text>
            </View>
            <View style={{flexDirection:"row",gap:12}}>
                <Icon name="magnifying-glass" size={30} color="#900" />
                <Icon name="shopping-cart" size={30} color="#900" />
            </View>
          </View>
          </>
  )
}

export default Header