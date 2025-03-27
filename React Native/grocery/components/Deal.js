import React from "react";
import { View, Text,Image, TouchableOpacity } from 'react-native'
export function Deal({}) {
  return <View style={{
    padding: 12,
    backgroundColor: '#f2f6e0',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:16
  }}>  
        <View>
            <Text style={{
        fontWeight: '400'
      }}>Top deal!</Text>
            <Text style={{
        fontWeight: '600',
        fontSize: 24
      }}>FRESH AVOCADO</Text>
            <Text style={{
        fontWeight: '600',
        fontSize: 24,
        marginBottom:16
      }}>UP TO 15% OFF</Text>
            
            <TouchableOpacity style={{
        backgroundColor: "#10355b",
        borderRadius: 28,
        width: '110',
        alignItems: 'center',
        padding: 12
      }}>
                <Text style={{
          color: 'white'
        }}>Shop Now</Text>
            </TouchableOpacity>
        </View>
        <Image style={{
      width: 160,
      height: 160
    }} source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9F8P9QXgYuoBE-XjCuEmeEiwYSQJyyK5FJg&s'
    }} />
        
      </View>;
}
  