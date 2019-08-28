import React from 'react';
import { Text, View } from 'react-native';


class VideoLength extends React.Component {
   
    render() { 
        return ( 
            <View>
                <Text style={this.props.style}>{this.props.videoLength}</Text>
            </View>
         );
    }
}
 
export default VideoLength;