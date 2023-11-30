import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width

const Footer = () => {
  return (
    <>
      <View style={{ flex: 5, flexDirection: 'row', alignSelf: 'center',padding:10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 15, alignSelf: 'center' }}>
          <Text>
          PUBLICACIONES
          </Text>
          <Text > REELS
          </Text>
          <Text > GUARDADO
          </Text>
          <Text > ETIQUETADAS
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1,  gap: 10, justifyContent: 'space-between', flexWrap:'wrap', flexDirection:'row',padding: 15 }}>

      <View style={{  width: width * 0.42, height: width * 0.42, backgroundColor:'black', borderRadius:10}}></View>
      <View style={{ width: width * 0.42, height: width * 0.42, backgroundColor:'black', borderRadius:10}}></View>
      <View style={{ width: width * 0.42, height: width * 0.42, backgroundColor:'black', borderRadius:10}}></View>
      <View style={{ width: width * 0.42, height: width * 0.42, backgroundColor:'black', borderRadius:10}}></View>
      <View style={{ width: width * 0.42, height: width * 0.42, backgroundColor:'black', borderRadius:10}}></View>

      </View>
    </>
  )
}

export default Footer

const styles = StyleSheet.create({})