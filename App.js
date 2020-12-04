import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import {View,Text, useWindowDimensions} from "react-native";
import LoginScreen  from "./Screens/loginScreen";
import SignupScreen  from "./Screens/SignupScreen"
import { createStackNavigator } from '@react-navigation/stack';
import welcomeDonorScreen from "./Screens/welcomeDonorScreen"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WelcomeDonorScreen from './Screens/welcomeDonorScreen';
import WelcomeCampScreen  from "./Screens/welcomeCampScreen";
import WelcomeHospitalScreen from "./Screens/welcomeHospitalScreen";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const isEmailAvailable =false;
const userType ='Hospital';
const App=()=>{
 return(
   <NavigationContainer>
     {isEmailAvailable === true ? userType === 'Donor' ? <WelcomeDonorScreen /> : userType === 'Camp' ? <WelcomeCampScreen/>:<WelcomeHospitalScreen/>:<LoginScreen/>}
      
   </NavigationContainer>
 );
}

export default App;