import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';





const InsideBlock = () => {

  const [selectedButton, setSelectedButton] = useState(null);

  const CustomButton = ({ title, uri }) => {

    const isPressed = selectedButton === title;
    const handlePress = () => setSelectedButton(title);

    const Rectangle = () => (
      <View style={styles.rectangle} />
    );
    return (

      <TouchableOpacity

        onPress={handlePress}
        style={[styles.button, isPressed && styles.buttonPressed]}
      >

        <View style={styles.imgtext}>
          <Image
            source={{ uri }}
            style={styles.ImgButton}
          />
          <Text style={styles.text}>{title}</Text>
        </View>

        {isPressed && <Rectangle />}
      </TouchableOpacity>





    );
  };



  return (
    <View style={styles.container}>
      <Image
        source={{ uri: './components/InsideBlock/img/Место для лого.png' }}
        style={styles.logo}

      />
      <CustomButton title='Главная' uri='./components/InsideBlock/img/search1.png' />
      <CustomButton title='Курсы' uri='./components/InsideBlock/img/search1(1).png' />
      <CustomButton title='Заявки' uri='./components/InsideBlock/img/search1(2).png' />
      <CustomButton title='Чаты' uri='./components/InsideBlock/img/search1(3).png' />
      <CustomButton title='Настройки' uri='./components/InsideBlock/img/settings-02.png' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 300,

    alignItems: 'flex-start',
  },
  logo: {
    width: 300,
    height: 45,
    margin: "0 40px 0 40px",

  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 10,
    width: 290,
    height: 52,

    gap: 10,
    marginLeft: '10px'

  },

  buttonPressed: {

    backgroundColor: '#D5CCFA',

  },

  imgtext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,
    marginLeft: 10
  },

  rectangle: {
    display: 'flex',


    backgroundColor: '#5932EA',
    height: 44,
    width: 4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  ImgButton: {
    width: 24,
    height: 24,
  }
});


export default InsideBlock;