import React, { useState, useRef } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Menu, Divider } from 'react-native-paper'; // Import Menu and Divider components from react-native-paper

const GroupLanding = () => {
    const navigation = useNavigation()
    const [subscriptions, setSubscriptions] = useState(['Netflix', 'Amazon Prime', 'Hotstar', 'Netflix', 'Amazon Prime', 'Hotstar', 'Netflix', 'Amazon Prime', 'Hotstar'])
    const [menuVisible, setMenuVisible] = useState(false); // State to manage the visibility of the menu
    const plusButtonRef = useRef(); // Ref to get position of the plus button

    const handleMenuOpen = () => setMenuVisible(true); // Function to open the menu
    const handleMenuClose = () => setMenuVisible(false); // Function to close the menu

    const handlePress = (item) => {
        console.log(`You pressed ${item}`)
    }

    const onLayoutPlusButton = () => {
        if (plusButtonRef.current) {
            plusButtonRef.current.measure((x, y, width, height, pageX, pageY) => {
                // Calculate position of plus button
                const anchorX = pageX + width;
                const anchorY = pageY + height;
                // Open menu at calculated position
                setMenuAnchor({ x: anchorX, y: anchorY });
            });
        }
    };
    const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 }); // State to store menu anchor position

    return (
        <View style={{ flex: 1, backgroundColor: '#222' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={styles.tab} onPress={handlePress}>
                    <Text style={styles.total}>Total: ₹1047</Text>
                </View>
                {
                    subscriptions.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ ...styles.tab, width: '80%' }} onPress={() => handlePress(item)}>
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            {/* Plus button to open menu */}
            <TouchableOpacity
                ref={plusButtonRef}
                style={styles.plusButton}
                onPress={handleMenuOpen}
                onLayout={onLayoutPlusButton} // Get position of the plus button
            >
                <Text style={{ fontSize: 24, color: 'white' }}>+</Text>
            </TouchableOpacity>

            {/* Menu */}
            <Menu
                visible={menuVisible}
                onDismiss={handleMenuClose}
                anchor={menuAnchor} // Anchor menu to calculated position
                style={{ marginTop: 50, marginRight: 20 }}
            >
                <Menu.Item onPress={() => {
                    handleMenuClose()
                    navigation.navigate('add_sub')
                }} title="Add New" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Copy Group Code" />
            </Menu>
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        padding: 20,
        marginHorizontal: 5,
        backgroundColor: '#333',
        borderRadius: 5,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
    },
    total: {
        fontSize: 30,
        color: '#4CAF50'
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    plusButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4CAF50',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default GroupLanding
