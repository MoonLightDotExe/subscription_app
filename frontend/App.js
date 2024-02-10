import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import VendorLanding from './components/VendorLanding'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>TEST12!</Text> */}
      <VendorLanding />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
