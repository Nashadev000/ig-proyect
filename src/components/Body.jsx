import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native'

import { featuredStories, userProfile } from '../data/user-profile'

const width = Dimensions.get('screen').width

const Body = () => {
  return (
    <>
      <View style={{ padding: 10 }}>
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
        <View style={{ padding: 10, flexDirection: 'row', gap: 10 }}>
          {featuredStories.map((story, index) => {
            return (
              <View key={index}>
                <Image style={styles.imageStory}
                  source={{ uri: story.photo }}
                />
                <Text style={{ alignSelf: 'center' }}>{story.title}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </>
  )
}

export default Body

const styles = StyleSheet.create({
  imageStory: {
    padding: 15,
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 100
  }
})