import { KeyboardAvoidingView, TouchableWithoutFeedback, Switch, ScrollView } from 'react-native'
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants'
//data
import { userDate, userProfile } from '../../data/user-profile';

const EditProfileScreen = () => {

  const GenderOptions = ['Masculino', 'Femenino', 'Personalizado', 'Prefiero no decirlo']
  const [gender, setGender] = useState('Femenino')
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const [name, setName] = useState('Nieves')

  const handleChangeName = (text) => {
    setName(text)
  }

  // Concatenar solo los strings
  const concatenatedStrings = `${userProfile.description}\n${userProfile.hobby.join('')}\n${userProfile.sign}\n${userProfile.age}\n${userProfile.nationality}`;

  const [presentation, setPresentation] = useState(concatenatedStrings)

  const data = {
    presentation,
    name
  }

  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', gap: 20, marginBottom: 10 }}>
            <Image style={styles.image} source={{ uri: userDate.photo }} />
            <Image style={styles.image} source={{ uri: userDate.avatar }} />
          </View>
          <View >
            <TouchableOpacity>
              <Text style={styles.buttonText}>Editar perfil o avatar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
              <View >
                <Text style={styles.titleInput}>Nombre</Text>
                <TextInput
                  style={styles.textInput}
                  value={name}
                  onChangeText={handleChangeName}
                />
                <Text style={styles.titleInput}>Nombre de usuario</Text>
                <TextInput 
                style={styles.textInput} 
                  value={userDate.name}
                />
                <Text style={styles.titleInput}>Pronombres</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.titleInput}>Presentación</Text>
                <TextInput
                  style={styles.textInput}
                  multiline
                  value={presentation}
                  onChangeText={(text) => setPresentation(text)}
                />
                <Text style={styles.titleInput}>Enlaces</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.titleInput}>Género</Text>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                >
                  {GenderOptions.map((option) => (
                    <Picker.Item
                      key={option}
                      label={option}
                      value={option}
                    />
                  ))}
                </Picker>
                <View style={styles.containerThreads}>
                  <Text >Mostrar insignia de Threads</Text>
                  <Switch
                    value={receiveUpdates}
                    onValueChange={(value) => setReceiveUpdates(value)}
                  />
                </View>
                <TouchableOpacity style={styles.footerText}>
                  <Text style={styles.buttonText}>
                    Cambiar a cuenta profesional
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText}>
                  <Text style={styles.buttonText}>
                    Configuración de información personal
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText}>
                  <Text style={styles.buttonText}>
                    Regístrate en Meta Verified
                  </Text>
                </TouchableOpacity>
              </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  buttonText: {
    color: '#1F74BF',
    fontWeight: '800',
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 14
  },
  footerText: {
    paddingBottom: 20,
  },
  containerThreads: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})