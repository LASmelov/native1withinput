// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InsideBlock from './components/InsideBlock/inside';
import HeaderBlock from './components/Header/header';
import MainNewCourse from './components/MainNewCourse/MainNewCourse';

const App = () => {
  return (
    <View style={styles.container1}>
      <InsideBlock style={styles.insideBlock} />
      <View style={styles.headerandmain}>


        <HeaderBlock style={styles.headerBlock} />

        <MainNewCourse />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: '1920px',
    backgroundColor: "#F4F5F6",
    flexDirection: 'row',

  },

  headerandmain: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 3
  }

})

export default App;
