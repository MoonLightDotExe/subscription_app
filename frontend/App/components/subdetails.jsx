import React, { useState } from 'react';
import { View, TextInput, Button, Switch, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SubDetails = () => {
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
            <TextInput
                style={styles.input}
                placeholder="Cost"
                value={cost}
                onChangeText={text => setCost(text)}
                keyboardType="numeric"
            />
            <View style={styles.dateContainer}>
                <Text>Due Date: {dueDate.toLocaleDateString('en-US')}</Text>
                <Button title="Select Date" onPress={showDatepicker} />
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
                <Text>Reminder:</Text>
                <Switch value={reminder} onValueChange={value => setReminder(value)} />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default SubDetails;
