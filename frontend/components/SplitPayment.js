import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import from @expo/vector-icons for the checkmark icon

const CustomSwitch = ({ value, onValueChange }) => {
    return (
        <TouchableOpacity onPress={onValueChange} style={{ borderRadius: 50, width: 23, height: 23, backgroundColor: value ? '#1E88E5' : '#222', justifyContent: 'center', alignItems: 'center' }}>
            {value && <AntDesign name="check" size={15} color="#FFFFFF" />}
        </TouchableOpacity>
    );
};

const SplitPayment = () => {
    const [amount, setAmount] = useState('');
    const [mode, setMode] = useState('Even Split')
    const [color1, setColor1] = useState('#1E88E5')
    const [color2, setColor2] = useState('#333')
    const [selectedUsers, setSelectedUsers] = useState({
        user1: true,
        user2: true,
        user3: true,
    });
    const [trueCount, setTrueCount] = useState()
    const handleCheckboxChange = (user) => {
        setSelectedUsers((prevState) => ({
            ...prevState,
            [user]: !prevState[user],
        }));
    };

    return (
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', backgroundColor: '#222', paddingTop: 100, width: '100%', height: '100%' }}>
            <TextInput
                placeholder="₹ Amount"
                placeholderTextColor='#676767'
                style={{ marginBottom: 10, padding: 5, height: 100, width: 200, backgroundColor: '#333', borderRadius: 5, color: 'white', fontSize: 35 }}
                textAlign='center'
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text)}
            />
            <View style={{ marginTop: 60, width: '100%', display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '50%', display: 'flex', alignItems: 'center', borderBottomWidth: 2, borderColor: color1 }} onPress={() => {
                    setMode('Even Split')
                    setColor1('#1E88E5')
                    setColor2('#333')
                }}>
                    <Text style={{ color: 'white', fontSize: 23 }}>
                        Even Split
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '50%', display: 'flex', alignItems: 'center', borderBottomWidth: 2, borderColor: color2 }} onPress={() => {
                    setMode('Custom Split')
                    setColor2('#1E88E5')
                    setColor1('#333')
                }}>
                    <Text style={{ color: 'white', fontSize: 23 }}>
                        Custom Split
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%', paddingLeft: 50, marginTop: 30, display: 'flex' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <CustomSwitch
                            value={selectedUsers.user1}
                            onValueChange={() => handleCheckboxChange('user1')}
                        />
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontSize: 30 }}>User 1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <CustomSwitch
                            value={selectedUsers.user2}
                            onValueChange={() => handleCheckboxChange('user2')}
                        />
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontSize: 30 }}>User 2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <CustomSwitch
                            value={selectedUsers.user3}
                            onValueChange={() => handleCheckboxChange('user3')}
                        />
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontSize: 30 }}>User 3</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity onPress={console.log("pressed")} style={{ width: '90%', height: 40, backgroundColor: '#1E88E5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Create Split</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SplitPayment;
