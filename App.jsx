import TabGallery from './src/tab/TabGallery'
import HomeScreen from './src/view/HomeScreen'
//tab
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//icon
import { MaterialCommunityIcons } from '@expo/vector-icons';


const App = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Profile') {
              return (
                <MaterialCommunityIcons name="face-woman" size={24} color="black" />
              );
            } else if (route.name === 'Gallery') {
              return (
                <MaterialCommunityIcons name="view-gallery" size={24} color="black" />
              );
            }
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'black',
        })}
      >
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Gallery"
          component={TabGallery}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

