import React, { useContext, useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button } from 'react-native' // Assuming you're using React Navigation for navigation
import TabComponent from '../components/tab'
import GrpComponent from '../components/grptab'
import UserContext from '../context/global.context'

const Groups = ({ navigation }) => {
    const [grps, setGroups] = useState([])

    const { user_id, group_id, setGroup_id } = useContext(UserContext)

    useEffect(() => {
        fetchGroupDetails()
    }, [])

    const fetchGroupDetails = async () => {
        try {
            const sendBody = {
                user_id,
            }
            const response = await fetch(
                'http://192.168.56.1:5000/api/groups/getGroupDetails',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendBody),
                }
            )
            const data = await response.json()
            console.log(data.data)
            setGroups(data.data)
            console.log(grps)
        } catch (error) {
            console.error('Error fetching group details: ', error)
        }
    }

    const handlePress = (id) => {
        setGroup_id(id)
        navigation.navigate('grphome')
        console.log(group_id)
    }

    return (
        <View style={styles.container}>
            {grps.map((item) => {
                return (
                    <TouchableOpacity
                        key={item._id}
                        onPress={() => handlePress(item._id)}
                    >
                        <GrpComponent grpname={item.group_name} />
                    </TouchableOpacity>
                )
            })}
            <View style={styles.buttonContainer}>
                <Button
                    color='#0DF3C9B9'
                    title='create new group'
                    // onPress={() => navigation.navigate('select')}
                    style={styles.button}
                />
                <Button
                    color='#0DF3C9BB'
                    title='join existing group'
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
        gap: 40,
    },

    button: {
        fontSize: 20, // Increase the font size
        paddingVertical: 10, // Adjust the vertical padding
        paddingHorizontal: 20, // Adjust the horizontal padding
    },
})

export default Groups
