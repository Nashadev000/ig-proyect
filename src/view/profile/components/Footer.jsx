import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const width = Dimensions.get('screen').width

const Footer = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('https://dog.ceo/api/breed/hound/images/random/20')
      .then((res) => {
        setImages(res.data.message)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }, [])

  return (
    <>
      <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black' }}>
        <TouchableOpacity>
          <Text style={styles.titlesButton}>PUBLICACIONES</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titlesButton}> REELS </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titlesButton}> GUARDADO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titlesButton}> ETIQUETADAS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerPhotos}>
        {images.map((image, index) => {
          return (
            <View key={index} style={styles.photo}>
                <Image
                  source={{ uri: image }}
                  style={{ flex: 1, borderRadius:10}}
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
    width: width * 0.45,
    height: width * 0.45,
  },
  containerPhotos: {
    gap: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15,
  },
  titlesButton: {
    fontWeight: '900',
    color: 'white'
  }
})