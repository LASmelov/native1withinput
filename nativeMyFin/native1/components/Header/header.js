import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';




const HeaderBlock = ({ saveInput }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputblock}>
        <TouchableOpacity>
          <Image
            source={uri = './components/Header/img/Icon.png'}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Поиск заявок"
          onChangeText={saveInput}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={uri = './components/Header/img/bell-01.png'}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>

      <Text style={styles.name}>Владимир</Text>
      <Image
        source={uri = './components/Header/img/Ellipse212.png'}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",


  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    color: "#B5B7C0",
    marginLeft: 10,
    width: 300,
    outlineStyle: 'none'
  },


  inputblock: {
    flexDirection: 'row',
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-start',
    width: 300,
    height: 48,
    backgroundColor: "white",
    paddingLeft: 20,
    borderRadius: 12,
  },
  button: {
    margin: 30,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  name: {
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default HeaderBlock;
