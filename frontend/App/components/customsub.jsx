import React, { useState } from 'react';
import { View, TextInput, Button, Switch, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomSub = () => {
    const [subname, setSubname] = useState('')
    const [cost, setCost] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [reminder, setReminder] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dueDate;
        setShowDatePicker(Platform.OS === 'ios');
        setDueDate(currentDate);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleSubmit = () => {
        console.log('Cost:', cost);
        console.log('Due Date:', dueDate);
        console.log('Reminder:', reminder);
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={subname}
                    onChangeText={text => setSubname(text)}
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cost"
                    value={cost}
                    onChangeText={text => setCost(text)}
                    keyboardType="numeric"
                />
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>Due Date: {dueDate.toLocaleDateString('en-US')}</Text>
                    <Button title="Select Date" onPress={showDatepicker} color="#13FCE4CB" />
                </View>
                {showDatePicker && (
                    <DateTimePicker
                        value={dueDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
                <View style={styles.checkboxContainer}>
                    <Text style={styles.dateText}>Reminder:</Text>
                    <Switch value={reminder} onValueChange={value => setReminder(value)} />
                </View>
                <Button color="#13FCE4CB" title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: '#00FFC3', // Color of the border
        borderRadius: 10, // Rounded border radius
        padding: 20, // Padding inside the box
        marginTop: 200
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
        marginTop: 0,




    },
    input: {
        height: 60,
        width: '100%',

        marginBottom: 30,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', // Set background color to green
        borderRadius: 10, // Set border radius for rounded corners
        maxWidth: "100%",
        fontSize: 20,



    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontSize: 20,
    },
    dateText: {
        color: '#FBFFFE', // Set the color to green
        fontSize: 20, // Adjust font size if needed
        fontWeight: '300', // Adjust font weight if needed
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default CustomSub;
