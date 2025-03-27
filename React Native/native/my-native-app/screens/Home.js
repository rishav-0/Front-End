import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
 
      <ScrollView style={styles.scrollContent}>
        <View>
          <Text style={styles.header}>Select additional</Text>
        <Text style={styles.header}>data you are </Text>
        <Text style={styles.header}><Text style={{color:'#017f70'}}>interested</Text> in</Text>
        <Text style={styles.subText}>You can customize this screen later</Text>
        </View>
        
        
        <View style={{ marginBottom: 30 }}>
          <Card title='Activate generators' caption='Keep track of the generator schedule' img='https://png.pngtree.com/png-clipart/20190117/ourmid/pngtree-paper-fan-fan-craft-fan-decoration-png-image_435246.jpg' />
          <Card title='Spillway conditions' caption='Find out spillway conditions' img='https://w7.pngwing.com/pngs/256/866/png-transparent-management-telehealth-health-care-terms-and-conditions-blue-angle-text-thumbnail.png' />
          <Card title='Points of interest' caption='Map with locations of fish restaurants and much more' img='https://cdn-icons-png.flaticon.com/512/4668/4668508.png' />
          <Card title='Aquatic Plants' caption='Explore the list of the most common aquatic plants' img='https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-green-aquarium-plant-cartoon-png-image_12025865.png' />
        </View>
      </ScrollView>

     
      <View style={styles.buttonContainer}>
        <Button  title='Next' onPress={() => navigation.navigate('Active')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding:24 
  },
  scrollContent: {
    flexGrow: 1,  
    padding: 10,
  },
  header: {
    fontSize: 30,
    flex:1
  },
  subText: {
    paddingVertical: 10,
    marginBottom: 10,
  },

});

export default Home;
