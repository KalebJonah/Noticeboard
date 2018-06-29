import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'
// import the different screens
import Loading from './src/Loading'
import SignUp from './src/Signup'
import Login from './src/Login'
import Main from './src/Main'
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Main'
  }
)
export default App 

