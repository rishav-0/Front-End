import { Tag } from '../components/Tag';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const Detail = ({route}) => {
  const {item}= route.params
  console.log(item,'item');

  return (
    <ScrollView style={{ flex:1, borderColor: 'red', paddingTop: 44, paddingHorizontal: 24,backgroundColor:'white' }}>

      <View style={{ alignItems: 'center', marginBottom: 36 }}>
        <Image style={{
          width: 200,
          height: 200
        }} source={{
          uri: item.imageUrl
        }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: '600', width: '70%' }}>{item.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                    <Icon name="star" size={20} color="#e5ba2c" />
                    <Text style={{fontWeight:'400'}}>{item.rating}</Text>
                </View>
      </View>
      <Text style={{ fontWeight: '400', marginBottom: 16 }}>Shop: {item.shop}</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16, justifyContent: 'space-around', backgroundColor: '#f7f7f7', borderRadius: 16, padding: 16, alignItems: 'center' }}>
        <View style={{alignItems:'center'}}>
          <Image style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 16
          }} source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RK6gO7WYiinh5MbPYjD3ZIkjTr_GJ05CzA&s'
          }} />
          <Text style={{}}>Vegitation</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Image style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 16
          }} source={{
            uri: 'https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png'
          }} />
          <Text style={{}}>Good food</Text>
        </View>
        <Tag     />

      </View>
      <Text style={{ fontSize: 22, fontWeight: '500', marginBottom: 16 }}>Details</Text>
      <Text style={{ fontWeight: '300', color: 'gray', marginBottom: 16 }}>
          {item.details}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View >
            <Text style={{}}>Price</Text>
            <Text style={{fontSize:24,fontWeight:'500'}}>₹{item.price.current}</Text>
          </View>
          <TouchableOpacity style={{padding:18,paddingHorizontal:44,backgroundColor:'#56e39f',borderRadius:44,}}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}


    function undefined({}) {
      return (<View style={{
  alignItems: 'center'
}}>
          <Image style={{
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 16
  }} source={{
    uri: 'https://img.freepik.com/premium-vector/green-gluten-free-round-stamp-sticker-vector-illustration_723710-965.jpg?semt=ais_hybrid'
  }} />
          <Text style={{}}>Gluten-free</Text>
        </View>);
    }
  export default Detail