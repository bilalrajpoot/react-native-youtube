import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import YouTubeVideo from '../component/YouTubeVideo';
import {getVideos} from '../Services/data';



class HomeScreen extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data =  getVideos();
    this.setState({data});
    console.log(data)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ScrollView
          style={{ flex: 1, backgroundColor: '#121212' }}
          contentContainerStyle={{ paddingTop: 0, }}>
          <View
            style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
            {
              this.state.data.map((_data, i) => {
                return (
                  <View key={i} style={{ flex: 1 }}>
                    <YouTubeVideo
                      videoInfo={_data.videoInfo}
                      channelInfo={_data.channelInfo} />
                  </View>
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
