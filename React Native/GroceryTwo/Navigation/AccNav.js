import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';

import ProductDetail from '../screens/ProductDetail';
import PersonalDetails from '../screens/PersonalDetails';
import MyAccount from '../screens/MyAccount';



export default function AccNav() {

  const Stack = createStackNavigator();


  return (
   
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MyAccount" component={MyAccount} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        </Stack.Navigator>

       

  );
}

