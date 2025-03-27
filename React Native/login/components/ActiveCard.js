import { View, Text, Switch } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from './Footer';

const ActiveCard = () => {
  return (
    <View style={{backgroundColor:'#017f70',borderRadius:20,overflow:'hidden',marginBottom:20}}>
        <View style={{flexDirection:'row',backgroundColor:'#018576',padding:'20'}}>
            <View style={{borderColor:'white',flex:1,width:'100%',alignItems:'center'}}>
                <Text style={{color:'white'}}>ACTIVATE</Text>
                <Text style={{color:'white'}}>GENERATORS</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:5,marginTop:3}}>
                  <FontAwesome5 name="fan" style={{}} size={26} color="#64b5ae" />
                  <Text style={{color:'white',fontSize:30}}>3</Text>
                </View>
            </View>
            <View style={{borderColor:'white',flex:1,width:'100%',alignItems:'center'}}>
                <Text style={{color:'white'}}>ACTIVATE</Text>
                <Text style={{color:'white'}}>GENERATORS</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:5,marginTop:3}}>
                  <FontAwesome6 name="bolt-lightning" style={{}} size={26} color="#64b5ae" />
                  <Text style={{color:'white',fontSize:30}}>11,353</Text>
                </View>
            </View>
        </View>
        <View style={{backgroundColor:'#057b6c',padding:'20',flexDirection:'row',justifyContent:'space-between'}}>
          <View>
                  <Text style={{color:'white',fontSize:16}}>RECIEVE NOTIFICATION WHEN</Text>
                  <Text style={{color:'white',fontSize:26}}>Generators turns on</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="bell-ring" style={{}} size={26} color="#64b5ae" />
              <Switch/>
          </View>
        </View>
        <View style={{backgroundColor:'#097165',padding:'20',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Text style={{color:'white',fontSize:16}}>Set up notifications for other  lakes</Text>
                  <FontAwesome name="angle-right" style={{}} size={26} color="white" />
        </View>
    </View>
  )
}

export default ActiveCard