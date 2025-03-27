import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import Active from './screens/Active';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the stack navigator (no need for `createStaticNavigation`)
const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        {/* Define screens here */}
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Active" component={Active} />
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
