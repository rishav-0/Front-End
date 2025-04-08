import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Input from '../Components/Input';
import DropdownComponent from '../Components/Gender'
import Country from '../Components/Country';
import Button from '../Components/Button';

const PersonalDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 22, paddingTop: 60 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
          <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.navigate('MyAccount')}>
            <FontAwesome name="angle-left" size={32} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Personal Details</Text>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>

        <View style={{ alignItems: 'center', marginBottom: 34 }}>
          <View style={{ position: 'relative', alignItems: 'center', height: 120, width: 120, borderRadius: 60, backgroundColor: '#c2c2c2' }}>
            <Image
              style={{ width: "100%", height: '100%', borderRadius: 60, alignSelf: 'center', marginBottom: 12 }}
              source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid' }}
            />
            <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#3c966d', borderRadius: 20, padding: 6 }}>
              <Ionicons name="camera-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* This View will take remaining space */}

        <View style={{ gap:20, paddingBottom: 40 }}>

          <Input title='Full name' placeholder={'Enter your name'} />

        <View style={{flex:1}}>
          <Text style={{ marginBottom: 8 }}>Gender</Text>
          <DropdownComponent title={'  Select gender'} />

        </View>

        <View style={{flex:1}}>
          <Text style={{ marginVertical: 8 }}>Phone Number</Text>
          <View style={{ flexDirection: 'row', gap: 18 }}>
            <Country />
            <TextInput
              placeholder={'Phone Number'}
              style={{
                flex: 1,
                height: 50,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: '#bbbbbb',
                paddingHorizontal: 12,
              }}
            />
          </View>

        </View>

          <Input title='Email' placeholder={'Enter your email'} />

          <Button title={'Update'} bg={'#3c966d'} />

        </View>
      </ScrollView>
    </View>
  )
}

export default PersonalDetails
