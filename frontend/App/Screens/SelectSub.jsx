import React from 'react';
import { View } from 'react-native';
import TabComponent from '../components/tab';

const SelectSub = ({ navigation }) => {
    const tabData = [
        { text: "Netflix", link: "addnew" },
        { text: "Amazon Prime", link: "addnew" },
        { text: "Disney+", link: "addnew" }
    ];

    return (
        <View style={{ flexDirection: "column" }}>
            {tabData.map((item, index) => (
                <TabComponent
                    key={index}
                    text={item.text}
                    link={item.link}
                    navigation={navigation}
                />
            ))}
        </View>
    );
}

export default SelectSub;
