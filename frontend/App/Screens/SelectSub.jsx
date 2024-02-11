import React, { useState, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import TabComponent from '../components/tab'
import { StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import UserContext from '../context/global.context'
// import disney from "../../images/disney_logo_nov_2021_rbg_0fa74b54.jpeg"
// import prime from "../../images/prime.png"
// import youtube from "../../images/youtube.png"
// import netflix from '../../images/netflix.png'

const SelectSub = ({ navigation }) => {
  const [val, setVal] = useState()
  const { user_id } = useContext(UserContext)

  const handleCreate = async () => {
    try {
      const sendBody = {
        user_id,
        group_name: val,
      }
      const response = await fetch(
        'http://192.168.56.1:5000/api/groups/addGroup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendBody),
        }
      )

      const data = await response.json()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'black',
        height: 800,
        marginTop: 0,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: '#00FFC3',
          margin: 10,
          fontWeight: '100',
        }}
      >
        Enter Group Name
      </Text>
      <View style={{ marginTop: 30 }}>
        <TextInput
          style={styles.input}
          placeholder='Enter Name'
          value={val}
          onChangeText={(text) => setVal(text)}
        />
        <Button
          title='submit'
          style={{
            fontSize: 40,
            color: '#00FFC3',
            margin: 10,
            fontWeight: '100',
          }}
          onPress={handleCreate}
        ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#00FFC3', // Color of the border
    borderRadius: 10, // Rounded border radius
    padding: 20, // Padding inside the box
    marginTop: 200,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    marginTop: 0,
  },
  input: {
    height: 60,
    width: '100%',

    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', // Set background color to green
    borderRadius: 10, // Set border radius for rounded corners
    maxWidth: '100%',
    fontSize: 20,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontSize: 20,
  },
  dateText: {
    color: '#FBFFFE', // Set the color to green
    fontSize: 20, // Adjust font size if needed
    fontWeight: '300', // Adjust font weight if needed
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
})

export default SelectSub
