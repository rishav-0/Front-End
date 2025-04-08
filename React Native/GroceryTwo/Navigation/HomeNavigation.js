import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';

import ProductDetail from '../screens/ProductDetail';
import PersonalDetails from '../screens/PersonalDetails';



export default function HomeNavigation() {

  const Stack = createStackNavigator();


  return (
   
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        </Stack.Navigator>

       

  );
}

