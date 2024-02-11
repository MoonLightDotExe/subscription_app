import React from "react";
import { View, Text, FlatList } from "react-native";

const ViewGroup = () => {
  // Assuming you have a list of members in your group
  const members = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    // Add more members as needed
  ];

  // Render item function for FlatList
  const renderMemberItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Group Members</Text>
      <FlatList
        data={members}
        renderItem={renderMemberItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ViewGroup;
