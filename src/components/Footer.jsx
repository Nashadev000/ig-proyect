import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const width = Dimensions.get('screen').width

const Footer = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random/5')
      .then((res) => {
        setImages(res.data.message)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }, [])

  return (
    <>
      <View style={{ flex: 5, flexDirection: 'row', alignSelf: 'center', padding: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 15, alignSelf: 'center' }}>
          <Text>
            PUBLICACIONES
          </Text>
          <Text> REELS
          </Text>
          <Text> GUARDADO
          </Text>
          <Text> ETIQUETADAS
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerPhotos}>
        {images.map((image, index) => {
          return (
            <View key={index} style={styles.photo}>
              <Image
                source={{ uri: image }}
                style={{ flex: 1, borderRadius: 10 }}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}

export default Footer

const styles = StyleSheet.create({
  photo: {
    width: width * 0.42,
    height: width * 0.42,
    backgroundColor: 'black',
    borderRadius: 10
  },
  containerPhotos: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15
  }
})