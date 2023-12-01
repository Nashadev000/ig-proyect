import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

const GalleryScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text>GalleryScreen</Text>
    </View>
  )
}

export default GalleryScreen

const styles = StyleSheet.create({
  body: {
    paddingTop: Constants.statusBarHeight
  }
})