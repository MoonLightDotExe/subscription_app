import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation for navigation

const TabComponent = ({ navigation, text, link }) => {
    return (
        <View style={styles.box}>

            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate(link)}>
                <Text style={styles.text}>{text}</Text>
                {/* <Image source={{ uri: image }} /> */}
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 1.5,
        borderColor: "#000000",
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: '#10CDAA',
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
    },

    tab: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        width: "80%",
        justifyContent: "center",
        // alignContent: "center",
        // alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        border: "2px solid #000000"
    },
    text: {
        fontSize: 30,
        color: "#000000",
        fontWeight: "300"



    }


});

export default TabComponent;