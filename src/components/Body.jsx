import { ScrollView } from 'react-native'
import { useEffect } from 'react'

import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'


const width = Dimensions.get('screen').width

const Body = () => {
  const userProfile = {
    name: '𝐍 𝐈 𝐄 𝐕 𝐄 𝐒',
    description: '𝚇𝚇 𝙰𝚗̃𝚘𝚜 𝙳𝚎 𝚃𝚛𝚊𝚐𝚎𝚍𝚒𝚊 シ︎',
    line: '___________________________',
    hobby: ['☣ Shuffle Dance', ' / ', 'Cutting Shapes', ' / ', 'Electro Dance 🔥'],
    sign: '☣ Geminis uwu',
    age: '☣ 20 años ✨',
    nationality: '☣ Lima _ Perú ♡🇵🇪',
  }




  return (
    <>
      <View style={{ padding: 10}}>
        <Text style={{ marginHorizontal: 20, fontWeight: '900', paddingBottom: 5 }}>{userProfile.name}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.description}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.line}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.hobby}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.sign}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.age}</Text>
        <Text style={{ marginHorizontal: 20 }}>{userProfile.nationality}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{ padding: 10, flexDirection: 'row', gap: 10}}>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>💀</Text></View>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>Destacada</Text></View>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>:3</Text></View>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>Destacado</Text></View>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>uwu</Text></View>
          <View ><Image style={{ padding: 15, width: width * 0.22, height: width * 0.22, borderRadius: 100 }}
            source={{ uri: 'https://i.pinimg.com/564x/bf/fd/85/bffd85ef6043c3c82caab0a84b411f7d.jpg' }}
          ></Image><Text style={{alignSelf:'center'}}>a</Text></View>
        </View>
      </ScrollView>
    </>
  )
}

export default Body

const styles = StyleSheet.create({})