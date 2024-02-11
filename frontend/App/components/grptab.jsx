import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const GrpComponent = ({ grpname }) => {
  const navigation = useNavigation()

  const handlePress = () => { }

  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.text}>{grpname}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1.5,
    borderColor: "#000000",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#10CDAA',
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tab: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#10CDAA',
    borderRadius: 5,
    width: "80%",
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30
  },
  text: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "300"



  },
  showMore: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
    marginLeft: 180,

  }
});

export default GrpComponent
