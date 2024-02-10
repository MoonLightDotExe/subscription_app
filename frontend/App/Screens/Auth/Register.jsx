import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Implement your registration logic here
        console.log('Registering with:', email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Register</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setConfirmPassword(text)}
                />
            </View>
            <Button color="#06FFC5A1" title="REGISTER" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: '300',
        fontSize: 50,
        color: '#06FFC5',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#E9E9E9',
        borderRadius: 11,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#27FFA5',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    registerText: {
        color: 'white',
    },
});

export default Register;