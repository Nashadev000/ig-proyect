

import { ScrollView, StyleSheet, View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Constants from 'expo-constants'



const HomeScreen = () => {

  return (
    <View style={styles.container}>
    <ScrollView>
      <Header />
      <Body />
      <Footer />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})