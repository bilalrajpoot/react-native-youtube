import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BottomTabNavigator } from './BottomTabNavigator';

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      BottomTabNavigator: BottomTabNavigator
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#121212',
          borderBottomWidth: 0
        },
        headerLeft: (
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png'
            }}
            style={{ height: 22, width: 98, marginLeft: 10 }}
          />
        ),
        headerRight: (
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="cast" size={25} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="videocam" size={25} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="search" size={25} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="account-circle" size={25} color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
      }
    }
  )
);
