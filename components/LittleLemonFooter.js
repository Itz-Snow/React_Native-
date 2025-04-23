import * as React from 'react';
import {View, Text} from 'react-native';

export default function LittleLemonFooter(){
    return(
        <View style={{backgroundColor: '#F4CE14',marginBottom:4}} >
            <Text style={{textAlign: 'center'}}>
                All rights reserved by little lemon ©2025
            </Text>
        </View>
    );
}