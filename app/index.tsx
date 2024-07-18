import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/screens/Home'; // Replace with your actual Home screen
import HeaderTabs from '@/components/HeaderTabs';
import { Header } from '@/components/headers';
import ProductDetails from '@/components/products/ProductDetails';
import ProductsList from '@/screens/ProductsList';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
