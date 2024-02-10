// Header.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>HEADER</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: "100"
    },
});

export default Header;
