import React,{useState} from 'react';
import {View,Text,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import SmallCard from "../customCards"
const { width, height } = Dimensions.get('window');
import { ThemeProvider,ButtonGroup,Input,Button,CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomCheckBox from "../Components/CustomCheckBox";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignupScreen from './SignupScreen';
import LinearGradient from 'react-native-linear-gradient'

const customWidth=width-(width*40)/100;
const customHeight=height;
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
function Home(){
     return( 
          <Tab.Navigator tabBarOptions={{
               style: {
                    backgroundColor: 'transparent',
                    elevation:0,
                    top:0,
                    left:10,
                    right:10,
                    position:'absolute'},
               indicatorStyle: { backgroundColor: 'red',width:60,left:'9%'},

                   }}
               >
          <Tab.Screen name='Donor' component={LoginComponent}/>
          <Tab.Screen name='Camp' component={LoginComponent}/>
          <Tab.Screen name="Hospital" component={LoginComponent}/>
       </Tab.Navigator> 
                   
       
         
     );
}

function LoginComponent({navigation}){
     return(
           
          <View style={Styles.container}>


               <View style={Styles.bodyConatainer}>


                    <Text style={Styles.titleStyle}>Sign In </Text>
                   
                    <Input
                         placeholder="Enter username here"
                         label="User name"
                         leftIcon={
                              <Icon
                                   name='user-md'
                                   size={30}
                                   color='black'
                              />
                         }
                    />

                    <Input
                         placeholder="Enter password here"
                         label="Password"
                         secureTextEntry={true}
                         leftIcon={
                              <Icon
                                   name='lock'
                                   size={30}
                                   color='black'
                              />
                         }
                    />

                    <Button
                         title="Sign In"
                    />

                    <TouchableOpacity>
                         <Text>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                         <Text>Don't have account yet ?</Text>
                         <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen') }}>
                              <Text>Sign up</Text>
                         </TouchableOpacity>
                    </View>
                    <Text style={{ color: "red" }}>Today Blood stock</Text>
                    <Text style={{ fontSize: 18 }}>PMCH Indoor Wards, Kusum Vihar,
                    Murli Nagar, Saraidhella,
                      Jharkhand 826005-Mobno-+918848510629</Text>

               </View>

          </View>
     );
}



const LoginScreen =()=>{
     return(
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="LoginScreen" component={Home}/>
               <Stack.Screen name="SignupScreen" component={SignupScreen}/>
          </Stack.Navigator>
     );
    
}

const Styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#100724",
     },
     headerContainer: {
          flex: 1,
          backgroundColor: "red",
          justifyContent: "flex-end",
          flexDirection: "row",
     },
     bodyConatainer: {
          flex: 3,
          marginTop:50,
          backgroundColor: "transparent",
          width: width * 90 / 100,
          alignSelf: "center",
     },
     titleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
     }
})
     

export default LoginScreen;