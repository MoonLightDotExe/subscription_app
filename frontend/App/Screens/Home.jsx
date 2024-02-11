import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Button,
} from 'react-native'
import TabComponent from '../components/tab'
import netflix from './dn.jpg'
import amazon from './subs-img.jpg'

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>SuperSubs</Text>
                <Text style={styles.text}>
                    SuperSubs is a great subscription management tool. It aims to track,
                    optimize and collaborate for subscriptions !
                </Text>
                <TouchableOpacity style={{}}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 30,
                            fontWeight: '300',
                            margin: 10,
                        }}
                    >
                        Exciting Offers
                    </Text>
                </TouchableOpacity>
                <View style={styles.box}>
                    <Image
                        source={netflix}
                        style={{ width: '100%', height: 200, objectFit: 'fill' }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                        }}
                    >
                        Netflix + Disney+ - 50% off
                    </Text>
                </View>
                <View style={styles.box}>
                    <Image
                        source={amazon}
                        style={{ width: '100%', height: 200, objectFit: 'fill' }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                        }}
                    >
                        Amazon Prime + - 50% off
                    </Text>
                </View>


                <View style={styles.container}>

                    <Text style={styles.header}>SuperSubs</Text>
                    <Text style={styles.text}>Manage your subscriptions all at one place collaboratively!</Text>

                    <View style={{
                        borderColor: "#00FFC3", // Color of the border
                        borderRadius: 10,
                        borderWidth: 2,
                        width: "30%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 10,
                        padding: 5,
                        marginTop: 40,
                        marginBottom: 40,
                    }}>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('login')}>
                            <Text style={{ color: "#00FFC3", fontSize: 30, fontWeight: "300", textAlign: "center" }}>Login</Text>
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity style={{}}>
                        <Text style={{ color: "white", fontSize: 30, fontWeight: "300", margin: 10 }}>Exciting Offers</Text>

                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.box}>
                            <Image source={netflix} style={{ width: "100%", height: 200, objectFit: "fill" }} />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,

                                }}
                            >Netflix + Disney+ - 50% off</Text>


                        </View>
                        <View style={styles.box}>
                            <Image source={amazon} style={{ width: "100%", height: 200, objectFit: "fill" }} />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,

                                }}
                            >Amazon Prime +  - 50% off</Text>


                        </View>
                    </ScrollView>





                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 0.5,
        borderColor: '#8F8F8F7E', // Color of the border
        borderRadius: 10, // Rounded border radius
        padding: 20, // Padding inside the box
        marginTop: 0,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 12
    },
    header: {
        fontSize: 30,
        color: "#00FFC3",
        margin: 10,
        fontWeight: "100"
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: '200',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    container: {
        flex: 2,
        margin: 0,
        // height: 1000,
        backgroundColor: "#000000", // Set background color to black

    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
})
export default Home
