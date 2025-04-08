import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AcNavTab from '../Components/AcNavTab';

const MyAccount = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 22,
          paddingTop: 60,
          paddingBottom: 40,
        }}
      >
        {/* Top Section */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
            <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.navigate('Home')}>
              <FontAwesome name="angle-left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>My Account</Text>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>

          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View style={{
              alignItems: 'center',
              height: 80,
              width: 80,
              borderRadius: 40,
              overflow: 'hidden',
              backgroundColor: '#c2c2c2',
              marginBottom: 12
            }}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid' }}
              />
            </View>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Rishav Talukdar</Text>
            <Text style={{ color: '#999999', marginBottom: 16 }}>carazzy@gamail.com</Text>
          </View>

          <View>
            <Text style={{ color: '#999999', fontWeight: '400', fontSize: 16, marginBottom: 16 }}>General</Text>
            <AcNavTab icon='user-o' title='Personal Details' onPress={() => navigation.navigate('PersonalDetails')} />
            <AcNavTab icon='map-pin' title='Security' />
            <AcNavTab icon='book' title='Others' />
            <AcNavTab icon='bank' title='Payment method' noborder={true}/>
          </View>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Support Section */}
        <View>
          <Text style={{ color: '#999999', fontWeight: '400', fontSize: 16, marginBottom: 16 }}>Support</Text>
          <AcNavTab icon='support' title='Customer Support' />
          <AcNavTab icon='handshake-o' title='Terms and Conditions' />
        </View>

        {/* Logout */}
        <AcNavTab icon='power-off' title='Logout' noborder={true} />
      </ScrollView>
    </View>
  );
};

export default MyAccount;
