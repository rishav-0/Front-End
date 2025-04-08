import {  GlobalcontextProvider } from './context/Globalcontext';

import AppNavigator from './Navigation/AppNavigator';


export default function App() {

return (
    <GlobalcontextProvider>
       <AppNavigator />
    </GlobalcontextProvider>
   
  );
}

