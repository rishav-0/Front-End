import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'

const Success = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,paddingTop:40,paddingHorizontal:22}}>
        <Image
        source={{uri: 'https://www.shutterstock.com/image-vector/food-delivery-man-riding-red-600nw-1327144634.jpg'}}
        style={{width: 200, height: 200}}
        />
      <Text style={{fontWeight:'500',marginBottom:16}}>Account Created</Text>
      <Text style={{color:"#c2c2c2",marginBottom:16}}>Your account has been created successfully</Text>
      <Button title='Continue' bg='#3c966d' />
    </View>
  )
}

export default Success