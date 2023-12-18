import axios from 'axios';
import Constants from 'expo-constants'
import { useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const width = Dimensions.get('screen').width

const GalleryScreen = ({ navigation }) => {

  const [imag, setImag] = useState([''])
  useEffect(() => {
    axios.get('https://dog.ceo/api/breed/hound/afghan/images/random/20')
      .then(res => {
        setImag(res.data.message)
      })
      .catch(err => { console.log(err) })
  }, [])

  return (

    <View style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.tytle}>
            Historias
          </Text>
        </View>
        <View style={styles.containerPhoto}>
          {imag.map((imagen, index) => {
            return (
              <View key={index} style={styles.image}>
                <Fontisto name="date" size={24} color="black" />
                <Image source={{ uri: imagen }} style={styles.stylePhoto} />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default GalleryScreen

const BORDER_WIDTH = 2;
const styles = StyleSheet.create({
  body: {
    paddingTop: Constants.statusBarHeight,
    padding: 15
  },
  container: {
    flexDirection: 'row', borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    marginBottom: 15
  },
  tytle: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10
  },
  image: {
    width: width * 0.55,
    height: width * 0.95,
  },
  stylePhoto: {
    flex: 1,
    borderWidth: BORDER_WIDTH,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'black',
    overflow: 'hidden',
  },
  containerPhoto: {
    flexWrap: 'wrap',
    gap: 15,
    alignSelf: 'center'

  },
})