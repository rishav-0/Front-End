import React from "react";
import { Text, View,Image } from 'react-native';

export function Tag({}) {
  return <View style={{
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
        </View>;
}
  