import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Switch,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

const JoinGroup = () => {
  const [code, setCode] = useState("");

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = () => {
    console.log(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Group Code"
          value={code}
          onChangeText={(text) => setCode(text)}
          keyboardType="default"
        />
        <Button color="#13FCE4CB" title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "#00FFC3", // Color of the border
    borderRadius: 10, // Rounded border radius
    padding: 20, // Padding inside the box
    marginTop: 200,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#000000",
    marginTop: 0,
  },
  input: {
    height: 60,
    width: "100%",

    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF", // Set background color to green
    borderRadius: 10, // Set border radius for rounded corners
    maxWidth: "100%",
    fontSize: 20,
  },
});

export default JoinGroup;
