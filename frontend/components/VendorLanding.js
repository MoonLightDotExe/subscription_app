import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddNewService from './AddNewService';
import UpdateService from './UpdateService'

const VendorLanding = ({ navigation }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const items = [
        {
            id: 1,
            name: 'Blue T-Shirt',
            description: 'A comfortable blue t-shirt made from soft cotton.',
            price: 20.99,
        },
        {
            id: 2,
            name: 'Black Jeans',
            description: 'Classic black jeans suitable for any occasion.',
            price: 39.99,
        },
        {
            id: 3,
            name: 'Running Shoes',
            description: 'Lightweight running shoes with excellent cushioning.',
            price: 59.99,
        },
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuItemPress = (option) => {
        setSelectedOption(option);
        setShowMenu(false);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleBack = () => {
        setSelectedOption(null);
    };

    return (
        <TouchableWithoutFeedback onPress={closeMenu}>
            <View style={styles.container}>
                {selectedOption === null && (
                    <View style={styles.header}>
                        <Text style={styles.heading}></Text>
                        <TouchableOpacity onPress={toggleMenu}>
                            <MaterialIcons name="more-vert" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                )}
                {selectedOption !== null ? (
                    selectedOption === 'Add New Service' ? (<AddNewService onBack={handleBack} />) : (<UpdateService onBack={handleBack} />)
                ) : (
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => /*setSelectedOption('Update Service')*/
                                    navigation.navigate('update_service', { item })}
                            >
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>Price: ₹{item.price}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.list}
                    />
                )}
                {showMenu && (
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => navigation.navigate('analytics')} style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Analytics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('add_new_service')/*handleMenuItemPress('Add New Service')*/} style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Add New Service</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222', // Dark background color
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // White text color
    },
    list: {
        flex: 1,
    },
    itemContainer: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#333', // Darker background color for items
        borderRadius: 8,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // White text color
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 5,
        color: '#ccc', // Lighter text color for description
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4CAF50', // Green text color for price
    },
    menu: {
        position: 'absolute',
        top: 60,
        right: 20,
        backgroundColor: '#333', // Dark background color for menu
        padding: 10,
        borderRadius: 8,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#fff', // White text color for menu items
    },
});


export default VendorLanding;
