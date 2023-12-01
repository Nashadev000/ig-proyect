

import { ScrollView, StyleSheet, View } from 'react-native'
// import Header from './profile/components/Header'
// import Footer from './profile/components/Footer'
// import Body from './profile/components/Body'
import Constants from 'expo-constants'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Header />
        <Body />
        <Footer /> */}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})