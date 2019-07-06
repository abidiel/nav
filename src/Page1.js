import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page1 = ({ navigation }) => (
  <View style={styles.container}>
    <Icon style={styles.icons} name="info-circle" size={18} color="#999" />
    <Button 
      title="About"
      onPress={() => navigation.navigate('About') }
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icons: {
        fontSize: 30,
        marginRight: 10,
    },
  });

export default Page1;