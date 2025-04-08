import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { detailTab } from '../utils';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ProductDetail = ({ route, navigation }) => {
  const { item,count } = route.params;

  const [tab, setTab] = useState('Description')
  const [qty, setQty] = useState( count || 0)

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", paddingTop: 60, paddingHorizontal: 22, }}>
        <View style={{ flex: 1, minHeight: '100%', justifyContent: 'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity style={{width:50}} onPress={() => navigation.navigate('Home')}>
                <FontAwesome name="angle-left" size={32} color="black"  />
              </TouchableOpacity>
                
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Product Details</Text>
              <FontAwesome name="heart-o" size={24} color="black" />
            </View>

            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              </View>
              <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={{ uri: item.img }} />
              <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
              <Text style={{ fontSize: 18, color: '#c2c2c2' }}>({item.weight})</Text>
              <Text style={{ fontSize: 18, marginBottom: 16, fontWeight: '500' }}>₹{item.price}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                {
                  detailTab.map(i => {
                    return (<Text key={i} style={{ fontWeight: tab == i && '500', fontSize: 18 }} onPress={() => setTab(i)}>{i}</Text>)
                  })
                }

              </View>
              {tab === 'Description' && (
                <Text style={{color:'#999999'}}>
                  Bursting with sunshine and zest, our oranges are a vibrant source of Vitamin C, perfect for boosting your immune system. Each juicy segment offers a refreshing blend of sweetness and tang, making it an ideal snack or a delightful addition to your morning routine. Grown in sun-drenched orchards, these oranges are hand-picked at peak ripeness to ensure maximum flavor and freshness. Whether you enjoy them squeezed into a revitalizing juice, sliced into a colorful salad, or simply peeled and savored, these oranges provide a healthy and delicious treat. Their bright color and invigorating aroma are sure to brighten your day and add a touch of citrusy delight to your palate.
                </Text>
              )}
              {tab === 'Nutrional info' && <Text style={{}}>info</Text>}
              {tab === 'Reviews' && <Text style={{}}>Reviews</Text>}
            </View>
          </View>


          <View style={{ paddingBottom: 22,flexDirection:'row',justifyContent:'center' }}>
            {
              qty != 0 && <View >
                <Text style={{ fontWeight: '500', marginBottom: 16,textAlign:'center' }}>Quantity</Text>
                <View style={{width:'100%', flexDirection: 'row', gap: 12, marginBottom: 16, alignItems: 'center',justifyContent:'space-between' }}>
                  <AntDesign name="minussquareo" size={40} color="black" onPress={() => setQty(qty - 1)} />
                  <Text style={{ fontWeight: '500', fontSize: 22 }}>{qty}</Text>
                  <AntDesign name="plussquareo" size={40} color="black" onPress={() => setQty(qty + 1)} />

                </View>
              </View>
            }
            {
              qty === 0 && <TouchableOpacity style={{ width: '100%', backgroundColor: '#3c966d', borderRadius: 16, padding: 16 }} onPress={() => setQty(qty + 1)}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Add to Cart</Text>
              </TouchableOpacity>
            }

          </View>

        </View>

      </ScrollView>
    </View>

  )
}

export default ProductDetail