import { useNavigation } from 'expo-router';
import React from 'react';
import { Text,StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';

const HeaderTabs = () => {

  const navigation = useNavigation();
 
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductsList')}>
        <Text style={styles.buttonText}>TEST</Text>
      </TouchableOpacity>
    </View>
    
    
  );


};

  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold',
      textAlign: 'center',
    },
  });
export default HeaderTabs;