import React from 'react';
import { View, Text, Image } from 'react-native';
import TabComponent from '../components/tab';
// import disney from "../../images/disney_logo_nov_2021_rbg_0fa74b54.jpeg"
// import prime from "../../images/prime.png"
// import youtube from "../../images/youtube.png"
// import netflix from '../../images/netflix.png'

const SelectSub = ({ navigation }) => {
    const tabData = [
        { text: "Netflix", link: "addnew" },
        { text: "Amazon Prime", link: "addnew" },
        { text: "Disney+", link: "addnew" }
    ];

    return (
        <View style={{
            flexDirection: "column",
            backgroundColor: "black",
            height: 800,
            marginTop: 0
        }}>
            <Text style={{

                fontSize: 40,
                color: "#00FFC3",
                margin: 10,
                fontWeight: "100"

            }}>Select Subscriptions</Text>
            <View style={{ marginTop: 30 }}>
                {tabData.map((item, index) => (
                    <TabComponent
                        key={index}
                        text={item.text}
                        link={item.link}
                        navigation={navigation}

                    />
                ))}
            </View>
        </View>
    );
}

export default SelectSub;
