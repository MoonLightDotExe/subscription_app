import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const GrpComponent = ({ grpname, endDate, members, link }) => {
  const navigation = useNavigation()
  const [showMore, setShowMore] = useState(false)

  const handlePress = () => { }

  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.tab} onPress={handleShowMore}>
        <Text style={styles.text}>{grpname}</Text>
        {showMore && (
          <View>
            <Text>End Date: {endDate}</Text>
            <Text>Members:</Text>
            {members.map((member, index) => (
              <Text key={index}>{member}</Text>
            ))}
          </View>
        )}
        <Text style={styles.showMore}>{showMore ? "Show Less" : "Show More"}</Text>
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
