import React from 'react';
import { Text, View, StatusBar } from 'react-native';

class LibraryScreen extends React.Component {
    
    render() { 
        return (  
            <View style={{flex: 1, backgroundColor: '#121212', alignItems:'center', justifyContent: 'center'}}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={{color: '#fff'}}>Library</Text>

            </View>
        );
    }
}
 
export default LibraryScreen;