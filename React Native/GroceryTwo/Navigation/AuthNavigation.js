import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/onboardingScreens/LandingPage';
import Signup from '../screens/register/Signup';
import Login from '../screens/register/Login';




export default function AuthNavigation() {

  const Stack = createStackNavigator();


  return (
   
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>

       

  );
}

