import React from 'react';
import { View, ImageBackground } from 'react-native';
import VideoLength from './VideoLength';


class VideoThumbnail extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, width: null, height: 200 }}>
            <ImageBackground 
              style={{ flex: 1, width: null, height: 200 }}
              source={{ uri: this.props.thumbnailUrl }}
            />
            <VideoLength
              style={{ position: "absolute", right: 20, top: -35, backgroundColor: "black", color: "white",
                      borderRadius: 3, paddingHorizontal: 7, textAlign: "right", overflow: "hidden",
                    }}
              videoLength={this.props.videoLength} />
          </View>
        </View>
      );
    }
  }
 
export default VideoThumbnail;