import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page2 = ({ navigation }) => (
  <View style={styles.container}>
    <Icon style={styles.icons} name="home" size={18} color="#999" />
    <Button 
      title="Home"
      onPress={() => navigation.navigate('Home') }
    />
  </View>
);

Page2.navigationOptions = {
  title: 'About',
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

export default Page2;