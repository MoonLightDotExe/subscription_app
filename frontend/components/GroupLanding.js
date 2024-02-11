import React, { useState, useRef, useEffect, useContext } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../App/context/global.context";
import { Menu, Divider } from "react-native-paper"; // Import Menu and Divider components from react-native-paper

const GroupLanding = () => {
  const navigation = useNavigation();
  const [subscriptions, setSubscriptions] = useState([]);
  const [total, setTotal] = useState();
  const [menuVisible, setMenuVisible] = useState(false);
  const plusButtonRef = useRef();
  const { group_id } = useContext(UserContext);

  useEffect(() => {
    fetchSubDetails();
  }, []);

  useEffect(() => {
    let totalVal = 0;
    subscriptions.map((m) => {
      console.log("M: " + m);
      totalVal += m.price;
    });
    console.log("TOTAL: " + totalVal);
    setTotal(totalVal);
  }, [subscriptions]);

  const fetchSubDetails = async () => {
    const cont = new Promise(async (resolve, reject) => {
      const sendBody = {
        group_id: group_id,
      };
      console.log(sendBody);
      const response = await fetch(
        "http://192.168.56.1:5000/api/groups/getSubDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendBody),
        }
      );
      const data = await response.json();
      setSubscriptions(data.data.subscriptions);
      resolve("Done");
    });
  };

  const handleMenuOpen = () => setMenuVisible(true);
  const handleMenuClose = () => setMenuVisible(false);

  const onLayoutPlusButton = () => {
    if (plusButtonRef.current) {
      plusButtonRef.current.measure((x, y, width, height, pageX, pageY) => {
        // Calculate position of plus button
        const anchorX = pageX + width;
        const anchorY = pageY + height;
        // Open menu at calculated position
        setMenuAnchor({ x: anchorX, y: anchorY });
      });
    }
  };
  const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 }); // State to store menu anchor position

  return (
    <View style={{ flex: 1, backgroundColor: "#222" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.tab}>
          <Text style={styles.total}>Total: {total}</Text>
        </View>
        {subscriptions.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ ...styles.tab, width: "80%" }}
              onPress={() => handlePress()}
            >
              <Text style={styles.text}>{item.service_name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Button
        color="#0DF3C9BB"
        title="Pay Now"
        onPress={() => console.log("split")}
        style={{
          fontSize: 20, // Increase the font size
          paddingVertical: 10, // Adjust the vertical padding
          paddingHorizontal: 20, // Adjust the horizontal padding
        }}
      />
      {/* Plus button to open menu */}
      <TouchableOpacity
        ref={plusButtonRef}
        style={styles.plusButton}
        onPress={handleMenuOpen}
        onLayout={onLayoutPlusButton} // Get position of the plus button
      >
        <Text style={{ fontSize: 24, color: "white" }}>+</Text>
      </TouchableOpacity>

      {/* Menu */}
      <Menu
        visible={menuVisible}
        onDismiss={handleMenuClose}
        anchor={menuAnchor} // Anchor menu to calculated position
        style={{ marginTop: 50, marginRight: 20 }}
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate("viewgrp");
          }}
          title="View Group"
        />
        <Menu.Item
          onPress={() => {
            handleMenuClose();
            navigation.navigate("add_sub");
          }}
          title="Add New"
        />
        <Divider />
        <Menu.Item onPress={() => {}} title="Copy Group Code" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 20,
    marginHorizontal: 5,
    backgroundColor: "#333",
    borderRadius: 5,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  total: {
    fontSize: 30,
    color: "#4CAF50",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  plusButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GroupLanding;
