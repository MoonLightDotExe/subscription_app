import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./App/Screens/Auth/LoginScreen";
import Register from "./App/Screens/Auth/Register";
import Subs from "./App/Screens/Subs";
import SelectSub from "./App/Screens/SelectSub";
import SubDetails from "./App/components/subdetails";
import Groups from "./App/Screens/Groups";
import VendorLanding from "./components/VendorLanding";
import AddNewService from "./components/AddNewService";
import UpdateService from "./components/UpdateService";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { UserProvider } from './App/context/global.context'

const Stack = createNativeStackNavigator()

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#222', // Dark background color
      width: '100%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff', // White text color
    },
    list: {
      flex: 1,
    },
    itemContainer: {
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#333', // Darker background color for items
      borderRadius: 8,
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff', // White text color
    },
    itemDescription: {
      fontSize: 16,
      marginBottom: 5,
      color: '#ccc', // Lighter text color for description
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4CAF50', // Green text color for price
    },
    menu: {
      position: 'absolute',
      top: 60,
      right: 20,
      backgroundColor: '#333', // Dark background color for menu
      padding: 10,
      borderRadius: 8,
      elevation: 5,
    },
    menuItem: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    menuItemText: {
      fontSize: 16,
      color: '#fff', // White text color for menu items
    },
  });
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="your_items">
          <Stack.Screen name="login" component={Login} options={{ title: 'Login', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="register" component={Register} options={{ title: 'Register', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="home" component={Home} options={{ title: 'Home', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="subs" component={Subs} options={{ title: 'Subscriptions', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="select" component={SelectSub} options={{ title: 'Select', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="addnew" component={SubDetails} options={{ title: 'Add New', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="groups" component={Groups} options={{ title: 'Groups', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="your_items" component={VendorLanding} options={{
            title: 'Your Items', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white', headerRight: () => (<TouchableOpacity onPress={toggleMenu}>
              <MaterialIcons name="more-vert" size={24} color="white" />
            </TouchableOpacity>)
          }} />
          <>{showMenu && (
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigation.navigate('analytics')} style={styles.menuItem}>
                <Text style={styles.menuItemText}>Analytics</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('add_new_service')/*handleMenuItemPress('Add New Service')*/} style={styles.menuItem}>
                <Text style={styles.menuItemText}>Add New Service</Text>
              </TouchableOpacity>
            </View>
          )}</>
          <Stack.Screen name="add_new_service" component={AddNewService} options={{ title: 'Add New Service', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
          <Stack.Screen name="update_service" component={UpdateService} options={{ title: 'Update Service', headerTitleStyle: { color: 'white', }, headerStyle: { backgroundColor: '#222' }, headerTintColor: 'white' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
