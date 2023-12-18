import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
// navegacion
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// pantallas de la aplicación
import ProfileScreen from './src/view/profile/ProfileScreen'
import EditProfileScreen from './src/view/edit-profile/EditProfileScreen'
import GalleryScreen from './src/view/gallery/GalleryScreen'
import SettingsScreen from './src/view/settings/SettingsScreen'
import HeaderNavigation from './src/components/HeaderNavigation'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.body}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Profile'
          screenOptions={{
            headerShown: true,
            header: (props) => <HeaderNavigation {...props} />
          }}
        >

          <Stack.Screen name='Profile'
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='EditProfile'
            component={EditProfileScreen}
            options={{ title: 'Editar Perfil'}}
          />
          <Stack.Screen
            name='Gallery'
            component={GalleryScreen}
            options={{ title: 'Archivar' }}
          />
          <Stack.Screen
            name='Settings'
            component={SettingsScreen}
            options={{ title: 'Ajustes' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff'
  }
})
