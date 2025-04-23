import * as React from 'react';
import {View, Text} from 'react-native';

export default function WelcomeScreen(){
    return(
        <View style={{flex: 1}} >
            <Text style={{fontSize: 28,fontWeight: 'bold',padding: 40,
                textAlign: 'center',color: '#EDEFEE'}}>
                    Welcome To Little Lemon
            </Text>
            <Text style={{fontSize: 20,textAlign: 'center',
                lineHeight: 22, color: '#EDEFEE',padding: 20 ,marginVertical: 8,}}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and 
                    classic cocktails in a lively but casual environment. We would love to hear 
                    more about your experience with us!
            </Text>
        </View>
    );
}