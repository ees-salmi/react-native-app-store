import React from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import Header from '@/components/headers/Header'; // Import your Header component
import { Text } from 'react-native';

const App = () => {
  const showNavBar = useSharedValue(1); // Example value for demonstration

  return (
    <Header
      showNavBar={showNavBar} // Pass the SharedValue here
      headerLeft={<Text>Lefst</Text>}
      headerCenter={<Text>Center</Text>}
      headerRight={<Text>Right</Text>}
    />
  );
};

export default App;
