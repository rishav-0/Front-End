import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the stack navigator (no need for `createStaticNavigation`)
const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        {/* Define screens here */}
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Signup" component={Signup} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    borderColor: 'red',
    paddingTop: 42,
  },
});
