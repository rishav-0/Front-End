import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './screens/onboardingScreens/LandingPage';
import Signup from './screens/register/Signup';
import Login from './screens/register/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Success from './screens/register/Success';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';


export default function App() {

  const Stack = createStackNavigator();

  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
        {/* <Success/> */}
   </NavigationContainer>
  );
}

