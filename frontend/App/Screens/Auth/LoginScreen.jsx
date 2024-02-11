import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Email'
          placeholderTextColor='#003f5c'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder='Password'
          placeholderTextColor='#003f5c'
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View
        style={{
          display: 'flex',
          gap: 20,
          marginTop: 30,
        }}
      >
        <Button
          title='Login'
          color='#368467'
          onPress={() => navigation.navigate('subs')}
        />

        <Button
          color='#000000'
          title="Don't have an account? Sign up!"
          onPress={() => navigation.navigate('register')}
        />
        <Button
          color='#000000'
          title="Click here for vendor login!"
          onPress={() => navigation.navigate('vendorlogin')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: '300',
    fontSize: 50,
    color: '#00FFC3',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#DBE1ED',
    borderRadius: 11,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00FFC3',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
})

export default Login
