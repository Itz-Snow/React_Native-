import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import custom component here
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './source/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.headerContainer}>
        <LittleLemonHeader/>
      </View>

        <StatusBar style="auto" />
        <WelcomeScreen/>

        <View styles={styles.footerContainer}>
          <LittleLemonFooter/>
        </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 0,
    backgroundColor: '#F4CE14',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 37,
  },
  footerContainer: {
    // flex: 0,
    padding: 20,

    backgroundColor: '#F4CE14',
  },
});
