import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import SmallCard from "../customCards"
const { width, height } = Dimensions.get('window');
import { ThemeProvider, ButtonGroup, Input, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLinkProps } from '@react-navigation/native';
import { color } from 'react-native-reanimated';


const customWidth = width - (width * 40) / 100;
const customHeight = height;

const CustomCheckBox = ({...props}) => {
    return (
       
        <CheckBox
            center
            title={props.title}
            checked={props.checked}
            containerStyle={{backgroundColor:"transparent",borderColor:"transparent",}}
        />
        
    );
}

export default CustomCheckBox;