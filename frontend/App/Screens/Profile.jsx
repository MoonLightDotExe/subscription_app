import React from 'react';
import { View, Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import TabComponent from '../components/tab';

const Profile = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Name</Text>
                <Text>Set Budget</Text>
                <TextInput></TextInput>
            </View>
        </View>
    )
}
export default Profile;