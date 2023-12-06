import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//expo
import Constants from 'expo-constants'
//data
import { userDate } from '../../../data/user-profile';

const Header = () => {

  const navigation = useNavigation()


  const [publi, setPubli] = useState(10)
  const [seg, setSeg] = useState(151)
  const [sig, setSig] = useState(100)

  return (
    <View style={styles.container}>

      <View style={{ flex: 1 }}>
        <Text style={styles.titleProfile}> {userDate.name}</Text>
        <Image style={styles.image} source={{ uri: userDate.photo }} />
      </View>

      <View style={styles.containerDetails}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.buttonDetails}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={{ fontWeight: '700' }}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDetails}
            onPress={() => navigation.navigate('Gallery')}
          >
            <Text style={{ fontWeight: '700' }}>Ver Archivo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Settings')}
          >
            <Ionicons name="md-settings-outline" size={27} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => setPubli(publi + 1)}
          >
            <Text style={{ textAlign: 'center' }}>{publi}</Text>
            <Text style={{ fontSize: 12 }}>Publicaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeg(seg + 1)}
          >
            <Text style={{ textAlign: 'center' }}>{seg}</Text>
            <Text style={{ fontSize: 12 }}>Seguidores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSig(sig + 1)}
          >
            <Text style={{ textAlign: 'center' }}>{sig}</Text>
            <Text style={{ fontSize: 12 }}>Siguiendo</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight
  },
  titleProfile: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 17,
    alignSelf: 'center'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    alignSelf: 'center',
  },
  containerDetails: {
    padding: 10,
    flex: 2,
    gap: 15,
  },
  buttonDetails: {
    backgroundColor: '#e4e6eb',
    padding: 10,
    borderRadius: 10
  }
})