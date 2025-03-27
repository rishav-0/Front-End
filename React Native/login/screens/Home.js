import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Image 
      style={{width: 400, height: 400}}
      source={{uri: 'https://cbx-prod.b-cdn.net/COLOURBOX58581640.jpg?width=800&height=800&quality=70'}} />
      <Text style={{fontSize:26,fontWeight:'bold',marginBottom:22}}>Leafboard</Text>

      <Text style={{fontSize:18,fontWeight:'bold'}}>Home Made Easy -Services</Text>
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:22}}>You can Trust!</Text>

      <Text style={{fontSize:18,}}>Welcome Home! Access trusted</Text>
      <Text style={{fontSize:18,}}>services for a comfortable,</Text>
      <Text style={{fontSize:18,}}>hassle-free living</Text>
      </View>
      <View style={{flexDirection:'row',gap:16}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor:'#001943',flex:1,borderWidth:1,padding:18,alignItems:'center',borderRadius:10}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Hire a baard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{borderColor:'#001943',flex:1,borderWidth:1,padding:18,alignItems:'center',borderRadius:10}}>
          <Text style={{color:'#001943',fontWeight:'bold'}}>Earn as a baard</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding:24,
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'space-between'
  },
  
});

export default Home;
