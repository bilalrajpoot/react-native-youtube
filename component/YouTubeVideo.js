import React from 'react';
import { View } from 'react-native';
import VideoThumbnail from "./VideoThumbnail";
import VideoInfo from './VideoInfo';

class YouTubeVideo extends React.Component {
    render() {
      return (
        <View>
          <VideoThumbnail
            thumbnailUrl={this.props.videoInfo.videoThumbnailUrl}
            videoLength={this.props.videoInfo.videoLength}
          />
          <VideoInfo
            videoTitle={this.props.videoInfo.title}
            videoInfo={this.props.videoInfo}
            channelName={this.props.channelInfo.channelName}
            channelAvatarImage={this.props.channelInfo.channelAvatarImage} />
        </View>
      )
    }
  }

  export default YouTubeVideo;