import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

import Category from '../Components/Category';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import { categories,products } from '../utils';

const Home = ({navigation}) => {

  const [selectedCategory,setSelectedCategory] = useState('Fruits')

  const filteredProducts = products?.find(i=>i?.category === selectedCategory)
 


  return (
    <ScrollView style={{flex:1,backgroundColor:"white",paddingTop:40,paddingHorizontal:22,}}>
      <Header/>
     
      <View style={{marginBottom:16,flexDirection:'row',overflow:'hidden',justifyContent:'space-between',borderRadius:28,backgroundColor:'#e8f9e9',alignItems:"center"}}>
        <View style={{padding:12}}>
          <Text style={{}}>Fruit Deals</Text>
          <Text style={{fontSize:28,fontWeight:'400',marginBottom:-12}}>Get 20% off</Text>
          <Text style={{fontSize:28,fontWeight:'400',marginBottom:16}}>every order</Text>
          <TouchableOpacity style={{padding:6,backgroundColor:"black",width:80,alignItems:'center',borderRadius:6}}>
            <Text style={{color:'white'}} >Shop now</Text>
          </TouchableOpacity>
        </View>
        <Image style={{height:'100%',width:'100%'}} source={{uri: 'https://w7.pngwing.com/pngs/54/394/png-transparent-variety-of-fruits-in-basket-basket-of-fruit-food-gift-baskets-hamper-fruit-miscellaneous-natural-foods-food-thumbnail.png'}} />
      </View>
      <View style={{marginBottom:16,flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
        <Text style={{fontSize:18,fontWeight:"500"}}>Categories</Text>
        <Text >See more</Text>
      </View>
      <View style={{marginBottom:16,flexDirection:"row",gap:16,flexWrap:'wrap',justifyContent:'space-between'}}>
        {
          categories.map(i=>(
            <Category key={i.title} img={i.img} title={i?.title} onPress={()=>setSelectedCategory(i?.title)} />
          ))
        }

      </View>
      <View style={{marginBottom:16,flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
        <Text style={{fontSize:18,fontWeight:"500"}}>{selectedCategory}</Text>
        <Text >See more</Text>
      </View>
      <View style={{marginBottom:16,flexDirection:"row",gap:16,flexWrap:'wrap',justifyContent:'space-between'}}>
        {
          filteredProducts?.items.map(i=>(
            <ProductCard key={i.title} price={i.price} title={i.title} weight={i.weight} img={i.img} onPress={()=>navigation.navigate('ProductDetail', { item: i })}/>
          ))
        }
        
      </View>

    </ScrollView>
  )
}

export default Home