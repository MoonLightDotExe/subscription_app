import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons' // Import from @expo/vector-icons for the checkmark icon
import RazorpayCheckout from 'react-native-razorpay'

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      onPress={onValueChange}
      style={{
        borderRadius: 50,
        width: 23,
        height: 23,
        backgroundColor: value ? '#1E88E5' : '#222',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {value && (
        <AntDesign
          name='check'
          size={15}
          color='#FFFFFF'
        />
      )}
    </TouchableOpacity>
  )
}

const SplitPayment = ({ navigation }) => {
  const [amount, setAmount] = useState()
  const [mode, setMode] = useState('Even Split')
  const [color1, setColor1] = useState('#1E88E5')
  const [color2, setColor2] = useState('#333')
  const users = [
    { _id: 1, name: 'user1' },
    { _id: 2, name: 'user2' },
    { _id: 3, name: 'user3' },
  ]
  const route = useRoute()
  const { total } = route.params
  const [selectedUsers, setSelectedUsers] = useState({})
  useEffect(() => {
    // Create an object with user IDs as keys and values set to true
    const initialSelectedUsers = {}
    users.forEach((user) => {
      initialSelectedUsers[user._id] = true
    })
    // Set the initial state for selectedUsers
    console.log(initialSelectedUsers)
    setSelectedUsers(initialSelectedUsers)
    console.log(total)
  }, [])
  const [trueCount, setTrueCount] = useState(Object.keys(selectedUsers).length)
  const handleCheckboxChange = (id) => {
    if (selectedUsers[id]) {
      setTrueCount(trueCount - 1)
    } else {
      setTrueCount(trueCount + 1)
    }
    setSelectedUsers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const handlePayment = async () => {
    var options = {
      description: 'Credits towards consult2ation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_sO2zI15U6qRtnE', // Your api key
      amount: (total / users.length).toFixed(1) * 100,
      name: 'foo',
      prefill: {
        email: 'om@gmail.com',
        contact: '9132323324',
        name: 'Om Amonkar',
      },
      theme: { color: '#F37254' },
    }
    RazorpayCheckout.open(options)
      .then((data) => {
        alert(`Success: ${data.razorpay_payment_id}`)
      })
      .catch((error) => {
        alert(`Error: ${error.code} | ${error.description}`)
      })
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#222',
        paddingTop: 100,
        width: '100%',
        height: '100%',
      }}
    >
      <TextInput
        placeholder={`Rs. ${total}`}
        placeholderTextColor='#FFF'
        style={{
          marginBottom: 10,
          padding: 5,
          height: 100,
          width: 200,
          backgroundColor: '#333',
          borderRadius: 5,
          color: 'white',
          fontSize: 35,
        }}
        textAlign='center'
        keyboardType='numeric'
        value={total}
        // onChangeText={(text) => setAmount(text)}
      />
      {/* <View style={{ marginTop: 60, width: '100%', display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '50%', display: 'flex', alignItems: 'center', borderBottomWidth: 2, borderColor: color1 }} onPress={() => {
                    setMode('Even Split')
                    setColor1('#1E88E5')
                    setColor2('#333')
                }}>
                    <Text style={{ color: 'white', fontSize: 23 }}>
                        Even Split
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '50%', display: 'flex', alignItems: 'center', borderBottomWidth: 2, borderColor: color2 }} onPress={() => {
                    setMode('Custom Split')
                    setColor2('#1E88E5')
                    setColor1('#333')
                }}>
                    <Text style={{ color: 'white', fontSize: 23 }}>
                        Custom Split
                    </Text>
                </TouchableOpacity>
            </View> */}
      <ScrollView style={{ width: '100%' }}>
        <View
          style={{
            width: '100%',
            paddingLeft: 50,
            marginTop: 30,
            display: 'flex',
          }}
        >
          {users.map((item) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                {/* <CustomSwitch
                                    value={true}
                                    onValueChange={() => handleCheckboxChange(item._id)}
                                /> */}
                <Text
                  style={{ color: '#FFFFFF', marginLeft: 10, fontSize: 30 }}
                >
                  User 1
                </Text>
                {mode === 'Even Split' && (
                  <Text
                    style={{ color: '#FFFFFF', marginLeft: 80, fontSize: 30 }}
                  >
                    ₹
                    {selectedUsers[item._id]
                      ? (total / users.length).toFixed(1)
                      : 0}
                  </Text>
                )}
              </View>
            )
          })}
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Button
          onPress={handlePayment}
          style={{
            width: '90%',
            height: 40,
            backgroundColor: '#1E88E5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}
          title='Make Payment'
        ></Button>
      </View>
    </View>
  )
}

export default SplitPayment
