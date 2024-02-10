import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const AddNewService = ({ onBack }) => {
    const [itemName, setItemName] = useState('');
    const [cost, setCost] = useState('');
    const [costMetric, setCostMetric] = useState('per_unit'); // Default value
    const [subLimit, setSubLimit] = useState('');

    const handleSave = () => {
        // Handle saving the input data
        // You can perform validation and other logic here
        console.log('Item Name:', itemName);
        console.log('Cost:', cost);
        console.log('Cost Metric:', costMetric);
        console.log('Sub Limit:', subLimit);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.heading}>Add New Service</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Item Name"
                    value={itemName}
                    onChangeText={setItemName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cost"
                    value={cost}
                    onChangeText={setCost}
                    keyboardType="numeric"
                />
                <Picker
                    style={styles.picker}
                    selectedValue={costMetric}
                    onValueChange={(itemValue) => setCostMetric(itemValue)}
                >
                    <Picker.Item label="Per Unit" value="per_unit" />
                    <Picker.Item label="Per Kg" value="per_kg" />
                    <Picker.Item label="Per Litre" value="per_litre" />
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Sub Limit"
                    value={subLimit}
                    onChangeText={setSubLimit}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Create</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    backButton: {
        marginTop: 5,
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        height: 50,
    },
    picker: {
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AddNewService;
