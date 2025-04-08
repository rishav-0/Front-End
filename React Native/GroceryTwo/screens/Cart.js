import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import React from 'react'
import CartItems from '../Components/CartItems';

const Cart = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"white",paddingHorizontal:22,paddingTop:60}}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,marginBottom:26}}>
              <TouchableOpacity style={{width:50}} onPress={() => navigation.navigate('Home')}>
                <FontAwesome name="angle-left" size={32} color="black"  />
              </TouchableOpacity>
                
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Product Details</Text>
              <Feather name="x" size={32} color="black" />
            </View>
            <CartItems img='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWU-QWiEBuazR0wxTdfdgJ0G0e46lMuuuy5Y9I1zOmm0GeiyjEEUL3Vf5mPN6QASXtVpbtqLEh_rrLszXNdRQk0ufl9wZ0K5g5XRXvh6uyWjesULWkBIAsH-w'/>
        
    </ScrollView>
  )
}

export default Cart