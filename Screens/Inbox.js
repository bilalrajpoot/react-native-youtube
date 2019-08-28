import React from 'react';
import { Text, View, StatusBar } from 'react-native';

class InboxScreen extends React.Component {

    render() { 
        return (  
            <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={{color: '#fff'}}>Inbox</Text>

            </View>
        );
    }
}
 
export default InboxScreen;