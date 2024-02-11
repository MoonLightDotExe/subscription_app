// NavBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "fixed",
        textAlign: "right",
        marginTop: 30,
        marginLeft: 300,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300',
    },
});

export default NavBar;
