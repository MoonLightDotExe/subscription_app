import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Login from './LoginScreen';
import Register from './Register';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleToggleScreen = () => {
        setShowLogin(!showLogin);
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.logo}></Text> */}
            {showLogin ? (
                <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
                <Register />
            )}
            <Button
                title={showLogin ? 'Switch to Register' : 'Switch to Login'}
                onPress={handleToggleScreen}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
});

export default Index;

