import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const GrpComponent = ({ grpname, endDate, members, link }) => {
  const navigation = useNavigation()
  const [showMore, setShowMore] = useState(false)

  const handlePress = () => {}

  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={handlePress}
    >
      <Text style={styles.text}>{grpname}</Text>
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
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  text: {
    fontSize: 30,
  },
})

export default GrpComponent
