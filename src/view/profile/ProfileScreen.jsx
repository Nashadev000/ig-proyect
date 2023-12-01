import { ScrollView, StyleSheet, View } from 'react-native'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <ScrollView>
        <Header />
        <Body />
        <Footer />
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  body: {
    // paddingTop: Constants.statusBarHeight
  }
})