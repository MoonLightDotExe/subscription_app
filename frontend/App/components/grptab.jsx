import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GrpComponent = ({ grpname, endDate, members, link }) => {
    const navigation = useNavigation();
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
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
    );
};

const styles = StyleSheet.create({
    tab: {
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#A3A3A3',
        borderRadius: 5,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30
    },
    text: {
        fontSize: 30
    },
    showMore: {
        fontSize: 16,
        marginTop: 10,
        color: 'blue',
    }
});

export default GrpComponent;
