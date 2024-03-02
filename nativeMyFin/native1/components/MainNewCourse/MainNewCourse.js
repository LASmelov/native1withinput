import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import HeaderBlock from '../Header/header';

const MainNewCourse = () => {
    const [block, setBlock] = useState([]);
    const [input, setInput] = useState('');

    const handleTextPress = (index) => {
        const updatedBlock = [...block];
        updatedBlock.splice(index, 1);
        setBlock(updatedBlock);
    };

    return (
        <View style={styles.container}>
            <HeaderBlock saveInput={InputText => setInput(InputText.trim())} />
            <Button title="Submit" onPress={() => {
                if (input.length > 0) {
                    setBlock([...block, input]);
                    setInput('');
                }
            }} />
            {block.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleTextPress(index)}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 100,
        backgroundColor: 'red',
    }
});

export default MainNewCourse;
