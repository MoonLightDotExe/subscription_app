import React, { useContext, useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button } from 'react-native' // Assuming you're using React Navigation for navigation
import TabComponent from '../components/tab'
import GrpComponent from '../components/grptab'
import UserContext from '../context/global.context'

const Groups = ({ navigation }) => {
    const grps = [{ _id: 1, name: "Group 1" }, { _id: 2, name: "Group 2" }, { _id: 3, name: "Group 3" },]
    return (
        <View style={styles.container}>
            {
                grps.map((item) => {
                    return (
                        <TouchableOpacity key={item._id} onPress={() => navigation.navigate('grphome')}>
                            <GrpComponent grpname={item.name} />
                        </TouchableOpacity>
                    )
                })
            }
            <View style={styles.buttonContainer}>
                <Button
                    color="#0DF3C9B9"
                    title="create new group"
                    // onPress={() => navigation.navigate('select')}
                    style={styles.button}
                />
                <Button
                    color="#0DF3C9BB"
                    title="join existing group"
                    // onPress={() => navigation.navigate('select')}
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
})

export default Groups
