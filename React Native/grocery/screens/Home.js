import { Deal } from '../components/Deal';
import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import avocado from '../images/avocado.png'
import React from 'react'
import Category from '../components/Category';
import {category , products} from '../utils'
import Product from '../components/Product';

const Home = ({navigation}) => {

  console.log(category,'category');

  return (
    <ScrollView style={{borderColor:'red',paddingTop:44,paddingHorizontal:24}}>
      <View style={{flexDirection:'row',marginBottom:24,justifyContent:'space-between',alignItems:'center',width:'100%'}}>
        <View style={{}}>
            <Text style={{fontWeight:'600'}}>Delivery</Text>
            <Text>Barpeta,Assam</Text>
        </View>
             <UserAvatar size={40} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff" />
      </View>
      <View style={{flexDirection:'row',gap:14,justifyContent:'space-between',marginBottom:24}}>
        <View style={{backgroundColor:'#56e39f',borderRadius:8,padding:12,flex:1}}>
            <Text style={{fontWeight:'600',fontSize:22}}>ORDER</Text>
            <Text style={{fontWeight:'600',fontSize:22}}>AGAIN</Text>
            
        </View>
        <View style={{backgroundColor:'#56e39f',borderRadius:8,padding:12,flex:1}}>
            <Text style={{fontWeight:'600',fontSize:22}}>LOCAL</Text>
            <Text style={{fontWeight:'600',fontSize:22}}>SHOP</Text>

        </View>
      </View>
      <Deal/>
      <Text style={{fontWeight:'600',fontSize:22,marginBottom:24}}>Shop by category</Text>
      <ScrollView  horizontal={true}>
        <View style={{flexDirection:'row',gap:22,justifyContent:'space-between',height:80,marginBottom:24}}>
           {
        category?.map((i, index) => (
          <Category key={index} title={i.cName} img={i.img} />
        ))
      }
        </View>
       
      </ScrollView>
      <Text style={{fontWeight:'600',fontSize:22,marginBottom:16}}>Today's Special</Text>
      <ScrollView horizontal={true}>
          <View style={{flexDirection:'row',justifyContent:'space-between',gap:16}}>
        {
            products?.map((i, index) => (
                <Product key={index} img={i.imageUrl} price={i.price.current} name={i.name} route={()=>navigation.navigate('Detail',{item:i})}/>
            ))
        
        }
        
      </View>
      </ScrollView>
      
     
    </ScrollView>
  )
}

export default Home