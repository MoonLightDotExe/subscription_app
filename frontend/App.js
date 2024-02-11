import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Home from './App/Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './App/Screens/Auth/LoginScreen'
import Register from './App/Screens/Auth/Register'
import Subs from './App/Screens/Subs'
import SelectSub from './App/Screens/SelectSub'
import SubDetails from './App/components/subdetails'
import Groups from './App/Screens/Groups'
import VendorLanding from './components/VendorLanding'
import AddNewService from './components/AddNewService'
import UpdateService from './components/UpdateService'
import { useState } from 'react'
import { UserProvider } from './App/context/global.context'
import GroupLanding from './components/GroupLanding'
import { Provider } from 'react-native-paper'
import SplitPayment from './components/SplitPayment'
import Payment from './App/components/Payment'

const Stack = createNativeStackNavigator()

export default function App() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <UserProvider>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen
              name='login'
              component={Login}
              options={{
                title: 'Login',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='register'
              component={Register}
              options={{
                title: 'Register',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='home'
              component={Home}
              options={{
                title: 'Home',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='subs'
              component={Subs}
              options={{
                title: 'Subscriptions',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='select'
              component={SelectSub}
              options={{
                title: 'Select',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='addnew'
              component={SubDetails}
              options={{
                title: 'Add New',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='groups'
              component={Groups}
              options={{
                title: 'Groups',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='your_items'
              component={VendorLanding}
              options={{
                title: 'Your Items',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='add_new_service'
              component={AddNewService}
              options={{
                title: 'Add New Service',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='update_service'
              component={UpdateService}
              options={{
                title: 'Update Service',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='group_landing'
              component={GroupLanding}
              options={{
                title: 'My Group',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='add_sub'
              component={SplitPayment}
              options={{
                title: 'My Group',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name='payment'
              component={Payment}
              options={{
                title: 'Payment',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: '#222' },
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </UserProvider>
  )
}
