import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './App/Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './App/Screens/Auth/LoginScreen'
import Register from './App/Screens/Auth/Register'
import Subs from './App/Screens/Subs'
import SelectSub from './App/Screens/SelectSub'
import SubDetails from './App/components/subdetails'
import Groups from './App/Screens/Groups'
import { UserProvider } from './App/context/global.context'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen
            name='login'
            component={Login}
          />
          <Stack.Screen
            name='register'
            component={Register}
          />
          <Stack.Screen
            name='home'
            component={Home}
          />
          <Stack.Screen
            name='subs'
            component={Subs}
          />
          <Stack.Screen
            name='select'
            component={SelectSub}
          />
          <Stack.Screen
            name='addnew'
            component={SubDetails}
          />
          <Stack.Screen
            name='groups'
            component={Groups}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
