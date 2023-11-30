import { ScrollView, StyleSheet, View, } from 'react-native'
import Header from './src/components/Header'
import Constants from 'expo-constants'
import Body from './src/components/Body'
import Footer from './src/components/Footer'


const App = () => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Body />
        <Footer />
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})