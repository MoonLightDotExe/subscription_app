import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <ScrollView>

            <View style={styles.container}>

                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200, marginTop: 30 }}
                />

                <Text style={styles.text}>SuperSubs is a great subscription management tool.It aims to track, optimize and collaborate for subscriptions !</Text>

                <Button title="Login" onPress={() =>
                    navigation.navigate("login")
                } />


            </View>
            {/* <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="You can type in me"
            /> */}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#4CAF50', // Green color
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        margin: 10
    }
})
export default Home;