import { View, Text, ScrollView } from 'react-native'
import Nav from '../components/Nav'
import React from 'react'
import ActiveCard from '../components/ActiveCard'
import Time from '../components/Time'
import Footer from '../components/Footer'

const Active = ({navigation}) => {
  return (
    <View style={{flex:1,overflow:'hidden',padding:24}}>
      <Nav navigation={navigation}/>
      <ActiveCard/>
      <Text style={{color:'black',fontSize:16,textAlign:'center',paddingHorizontal:4,marginBottom:20}}>
        Generation schedule and subsequent water releases from dams are subject to change without notice
      </Text>
      <ScrollView style={{flex:1}}>
        <Time num='3' from='12:00' to='3:00'/>
        <Time num='1' from='2:00' to='5:00'/>
        <Time num='3' from='6:00' to='8:00'/>
        <Time num='3' from='8:00' to='12:00'/>
        <Time num='3' from='8:00' to='12:00'/>
        <Time num='3' from='8:00' to='12:00'/>
        <Time num='3' from='8:00' to='12:00'/>
        <Time num='3' from='8:00' to='12:00'/>

      </ScrollView>
          <Footer/>
      
    </View>
  )
}

export default Active