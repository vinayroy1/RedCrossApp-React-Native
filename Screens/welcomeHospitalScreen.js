import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import SmallCard from "../customCards"
const { width, height } = Dimensions.get('window');
import { ThemeProvider, ButtonGroup, Input, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomCheckBox from "../Components/CustomCheckBox";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignupScreen from './SignupScreen';
import DonorProfile from './ProfileScreen';

const customWidth = width - (width * 40) / 100;
const customHeight = height;
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function WelcomeHospitalScreenComponent({ navigation }) {
    return (

        <View style={{ flex: 1 }}>
            <Button title="go to profile screen" onPress={() => { navigation.navigate("ProfileScreen") }} />
        </View>


    );
}



const WelcomeHospitalScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomeHospital" component={WelcomeHospitalScreenComponent} />
            <Stack.Screen name="ProfileScreen" component={DonorProfile} />
        </Stack.Navigator>
    );

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    headerContainer: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    bodyConatainer: {
        flex: 3,
        backgroundColor: "pink",
        width: width * 90 / 100,
        alignSelf: "center",
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})


export default WelcomeHospitalScreen;