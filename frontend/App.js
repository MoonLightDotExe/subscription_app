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
import Profile from "./App/Screens/Profile";
import NavBar from "./App/components/navbar";
import VendorLanding from "./components/VendorLanding";
import AddNewService from "./components/AddNewService";
import UpdateService from "./components/UpdateService";
import { useState } from "react";
import { UserProvider } from "./App/context/global.context";
import { Provider } from "react-native-paper";
import CustomSub from "./App/components/customsub";
import GroupLanding from "./components/GroupLanding";
import JoinGroup from "./components/JoinGroup";
import VendorLogin from "./App/Screens/Auth/VendorLogin";
import ViewGroup from "./components/ViewGroup";
import SplitPayment from "./components/SplitPayment";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <UserProvider>
      <Provider>
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
              <Stack.Screen name="customsub" component={CustomSub} />
              <Stack.Screen name="grphome" component={GroupLanding} />
              <Stack.Screen name="joingrp" component={JoinGroup} />
              <Stack.Screen name="vendorlogin" component={VendorLogin} />
              <Stack.Screen name="vendorhome" component={VendorLanding} />
              <Stack.Screen name="addservice" component={AddNewService} />
              <Stack.Screen name="updateservice" component={UpdateService} />
              <Stack.Screen name="viewgrp" component={ViewGroup} />
              <Stack.Screen name="split" component={SplitPayment} />
              {/* <Stack.Screen name="newsub" component={SplitPayment} /> */}
            </Stack.Navigator>
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
