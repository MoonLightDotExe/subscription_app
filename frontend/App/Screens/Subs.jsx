import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import TabComponent from '../components/tab';

const Subs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabComponent text="Netflix" link="home" navigation={navigation} />
                <TabComponent text="Amazon Prime" link="home" navigation={navigation} />
                <TabComponent text="Disney+" link="home" navigation={navigation} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="View Groups"
                    onPress={() => navigation.navigate('groups')}
                    style={styles.button}
                />

                <Button
                    title="add new subscription"
                    onPress={() => navigation.navigate('select')}
                    style={styles.button}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'column',
        marginBottom: 20,
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

export default Subs;
