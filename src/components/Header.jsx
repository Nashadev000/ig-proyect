import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { useState } from 'react'

const Header = () => {

  const userDate = {
    name: 'nasha0609',
    photo: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg'
  }

  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titleProfile}> {userDate.name}</Text>
        <Image style={styles.image} source={{ uri: userDate.photo }} />
      </View>

      <View style={styles.containerDetails}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="md-settings-outline" size={27} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDetails}>
            <Text style={{ fontWeight: '700' }}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDetails} >
            <Text style={{ fontWeight: '700' }}>Ver Archivo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
          >
            <Text style={{ textAlign: 'center' }}>{count}</Text>
            <Text style={{ fontSize: 12 }}>Publicaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>143</Text>
            <Text style={{ fontSize: 12 }}>Seguidores</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>977</Text>
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
    marginLeft: 18,
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 16
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  containerDetails: {
    padding: 25,
    gap: 15
  },
  buttonDetails: {
    marginRight: 15,
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 10
  }
})