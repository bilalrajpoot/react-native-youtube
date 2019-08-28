import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class VideoInfo extends React.Component {
    render() {
      return (
        <View style={{ paddingHorizontal: 19, paddingTop: 15, paddingBottom: 15, flexDirection: 'row', marginTop: 5 }}>
          <View style={{ marginHorizontal: 10 }}>
            <Image 
              style={{ width: 40, height: 40, borderRadius: 20, margin: 0 }} 
              source={{ uri: this.props.channelAvatarImage }} />
          </View>
          <View style={{ paddingHorizontal: 5, paddingBottom: 15 }}>
            <Text style={{ fontWeight: '600', fontSize: 18, color: '#fff', flex: 1, flexWrap: 'wrap' }}>
              {this.props.videoTitle}
            </Text>
            <Text style={{ fontSize: 13, marginTop: 6, color: '#4d4d4d' }}>
              {
                this.props.channelName
              } · {
                this.props.videoInfo.description.views
              } · {
                this.props.videoInfo.description.uploadDate
              }
            </Text>
          </View>
          <View>
            <Icon name='more-vert' size={25} color={'#3e3e3e'} />
          </View>
        </View>
      )
    }
  }

  export default VideoInfo;