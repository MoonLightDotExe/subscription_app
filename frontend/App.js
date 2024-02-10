import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./App/Screens/Auth/LoginScreen";
import Register from "./App/Screens/Auth/Register";
import Subs from "./App/Screens/Subs";
import SelectSub from "./App/Screens/SelectSub";
import SubDetails from "./App/components/subdetails";
import Groups from "./App/Screens/Groups";
import Profile from "./App/Screens/Profile";
import NavBar from "./App/components/navbar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="subs" component={Subs} />
          <Stack.Screen name="select" component={SelectSub} />
          <Stack.Screen name="addnew" component={SubDetails} />
          <Stack.Screen name="groups" component={Groups} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="navbar" component={NavBar} />
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
