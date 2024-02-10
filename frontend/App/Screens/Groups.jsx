import React, { useContext, useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native' // Assuming you're using React Navigation for navigation
import TabComponent from '../components/tab'
import GrpComponent from '../components/grptab'
import UserContext from '../context/global.context'

const Groups = ({ navigation }) => {
  const members = ['John', 'Alice', 'Bob']
  const [groups, setGroups] = useState([])

  const { user_id } = useContext(UserContext)

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
      console.log(groups)
    } catch (error) {
      console.error('Error fetching group details: ', error)
    }
  }
  return (
    <View style={styles.container}>
      {groups.map((g) => {
        return (
          <GrpComponent
            grpname={g.group_name}
            endDate='12.12.12'
            members={members}
            link='abcd'
          />
        )
      })}

      <View style={styles.buttonContainer}>
        <Button
          title='add new group'
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
