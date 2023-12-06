import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const HeaderNavigation = ({ navigation, options, back, route }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{options.title}</Text>
    </View>
  )
}

export default HeaderNavigation

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    alignItems: 'center'
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})