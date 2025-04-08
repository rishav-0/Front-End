import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import LandingPage from '../screens/onboardingScreens/LandingPage';
import { Globalcontext } from '../context/Globalcontext';
import Cart from '../screens/Cart';

import AccNav from './AccNav';
import Start from './Start';

const AppNavigator = () => {

    const {userDetail} = useContext(Globalcontext)

    const Tab = createBottomTabNavigator()

    const user = true
    // const user = userDetail?.userName || false

  return (


      <NavigationContainer>
      {
        !user ? <AuthNavigation /> :
         <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Home' component={HomeNavigation} />
          <Tab.Screen name='Start' component={Start} />
          <Tab.Screen name='Cart' component={Cart} />
          <Tab.Screen name='My Account' component={AccNav} />
        </Tab.Navigator>
      }



    </NavigationContainer>
  )
}

export default AppNavigator