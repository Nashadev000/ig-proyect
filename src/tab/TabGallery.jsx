import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import axios from 'axios'

import Constants from 'expo-constants'

const width = Dimensions.get('screen').width

// api
// MÚLTIPLES IMÁGENES DE UNA COLECCIÓN DE SUB-RAZA
// https://dog.ceo/api/breed/hound/images/random/5

const TabGallery = () => {

  const [imgs, setImgs] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get('https://dog.ceo/api/breed/hound/afghan/images/random/20')
      .then((res) => {
        setImgs(res.data.message)
      })
      .catch((err) => {
        console.log('error', err)
      })
      axios.get('https://dog.ceo/api/breed/hound/list')
      .then((res)=>{
        setName(res.data.message[0])
      })
  }, [])

  return (
    <View style={styles.containerGallery}>
      <View>
        <Text style={styles.styleText}>GALLERY {name}</Text>
      </View>

      <ScrollView>
        <View style={styles.containerPhoto}>
          {imgs.map((img, index) => {
            return (
              <View key={index}
                style={styles.styleimage}>
                <Image source={{ uri: img }} style={{ flex: 1, borderRadius:10 }} />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default TabGallery

const styles = StyleSheet.create({
  containerGallery: {
    gap: 10,
    padding: 15,
    backgroundColor:'black',
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  containerPhoto: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10
  },
  styleimage: {
    width: 15,
    height: 15,
    width: width * 0.45,
    height: width * 0.45,
  },
  styleText:{
    fontSize:25,
    fontWeight:'900',
    color:'#fefefe',
    alignSelf:'center'
  }
})