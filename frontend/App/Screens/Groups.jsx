import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation for navigation
import TabComponent from '../components/tab';
import GrpComponent from '../components/grptab';

const Groups = ({ navigation }) => {
    const members = ["John", "Alice", "Bob"];
    return (
        <View style={styles.container}>
            <GrpComponent grpname="Group 1" endDate="12.12.12" members={members} link="abcd" />

            <View style={styles.buttonContainer}>
                <Button
                    color="#0DF3C9B9"
                    title="create new group"
                    onPress={() => navigation.navigate('select')}
                    style={styles.button}
                />
                <Button
                    color="#0DF3C9BB"
                    title="join existing group"
                    onPress={() => navigation.navigate('select')}
                    style={styles.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40
    },

    button: {
        fontSize: 20, // Increase the font size
        paddingVertical: 10, // Adjust the vertical padding
        paddingHorizontal: 20, // Adjust the horizontal padding
    },
});

export default Groups;