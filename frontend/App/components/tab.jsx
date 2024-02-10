import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native' // Assuming you're using React Navigation for navigation

const TabComponent = ({ navigation, text, link }) => {
  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={() => navigation.navigate(link)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#A3A3A3',
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  text: {
    fontSize: 30,
  },
})

export default TabComponent
