import React from 'react'
import { Button, TouchableHighlight, View } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay'

function Payment() {
  const makePayment = () => {
    var options = {
      description: 'Credits towards consult2ation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_sO2zI15U6qRtnE', // Your api key
      amount: '5000',
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Make Payment'
        onPress={makePayment}
      >
        {' '}
      </Button>
    </View>
  )
}

export default Payment
