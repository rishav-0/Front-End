import { View, Text,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
const image = {uri: 'https://st5.depositphotos.com/63940706/62482/i/450/depositphotos_624821968-stock-photo-young-adult-black-delivery-man.jpg'};

const LandingPage = ({navigation}) => {
  return (
   
      <ImageBackground source={image} resizeMode="cover" style={{flex:1,paddingTop:36,borderWidth:1,justifyContent:'flex-end',paddingBottom:88,paddingHorizontal:22,alignItems:'center'}} >
        <Text style={{fontSize:24,color:'white',fontWeight:'500'}}>Track your Orders</Text>
        <Text style={{color:'white',marginBottom:36}}>See the updates on your order from store to door</Text>

        <TouchableOpacity style={{marginBottom:16,backgroundColor:'#3c966d',width:'100%',borderRadius:12,padding:10}}>
            <Text style={{color:'white',textAlign:'center'}} onPress={()=>navigation.navigate('Signup')}>Sgn up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderColor:'#3c966d',width:'100%',borderRadius:12,padding:10}}>
            <Text style={{color:'white',textAlign:'center'}}>Log in</Text>
        </TouchableOpacity>
      </ImageBackground>

  )
}

export default LandingPage  