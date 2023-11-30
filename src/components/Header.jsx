import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'


const Header = () => {
  const userDate = {
    name: 'nasha0609',
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={{ marginLeft: 18, marginBottom: 10, fontWeight: '900', fontSize: 16 }} >{userDate.name}</Text>
        <Image style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
        ></Image>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'flex-start', padding: 25, alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-settings-outline" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 15, backgroundColor: 'pink', padding: 5, borderRadius: 10 }}>
          <Text style={{ fontWeight: '700' }}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 15, backgroundColor: 'pink', padding: 5, borderRadius: 10 }} >
          <Text style={{ fontWeight: '700' }}>Ver Archivo</Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight

  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10
  }

})