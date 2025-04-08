import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';

import ProductDetail from '../screens/ProductDetail';
import PersonalDetails from '../screens/PersonalDetails';
import LandingPage from '../screens/onboardingScreens/LandingPage';
import Login from '../screens/register/Login';
import Signup from '../screens/register/Signup';



export default function Start() {

  const Stack = createStackNavigator();


  return (
   
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          
        </Stack.Navigator>

       

  );
}

