import * as React from 'react';
import {View, Text} from 'react-native';

export default function WelcomeScreen(){
    return(
        <View style={{}} >
            <Text style={{fontSize: 28,fontWeight: 'bold',marginBottom: 15,
                textAlign: 'center',color: '#fef9f4'}}>
                    Welcome To Little Lemon
                <Text style={{fontSize: 16,textAlign: 'center',lineHeight: 22}}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and 
                    classic cocktails in a lively but casual environment. We would love to hear 
                    more about your experience with us!
                </Text>
            </Text>
        </View>
    );
}