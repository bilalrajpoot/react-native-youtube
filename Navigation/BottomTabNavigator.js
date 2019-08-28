import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Screens/Home';
import TrendingScreen from '../Screens/Trending';
import SubscriptionsScreen from '../Screens/Subscription';
import InboxScreen from '../Screens/Inbox';
import LibraryScreen from '../Screens/Library';

export const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={'home'} size={20} style={{ color: tintColor }} />
        ),
      },
    },
    TrendingScreen: {
      screen: TrendingScreen,
      navigationOptions: {
        tabBarLabel: 'Trending',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={'whatshot'} size={20} style={{ color: tintColor }} />
        ),
      }
    },
    SubscriptionsScreen: {
      screen: SubscriptionsScreen,
      navigationOptions: {
        tabBarLabel: 'Subscriptions',
        tabBarIcon: ({ tintColor, focused }) => (
          <View style={{ width: 24, height: 24, margin: 5 }}>
            <Icon name={'subscriptions'} size={20} style={{ color: tintColor }} />
            {focused ? null : <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 8,
                height: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            </View>}
          </View>
        ),
      }
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={'mail'} size={20} style={{ color: tintColor }} />
        ),
      }
    },
    LibraryScreen: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: 'Library',
        tabBarIcon: ({tintColor,focused}) => (
          <Icon name={'folder'} size={20} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintClor: 'white',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#121212',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingVertical: 5
      }
    }
  }
);

// export const BottomTabNavigator = createBottomTabNavigator({
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Icon name={'home'} size={20} style={{ color: tintColor }} />
//       )
//     }
//   },
//   TrendingScreen: {
//     screen: TrendingScreen,
//     navigationOptions: {
//       tabBarLabel: 'Trending',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Icon name={'whatshot'} size={20} style={{ color: tintColor }} />
//       ),
//     }
//   },
//   SubscriptionsScreen: {
//     screen: SubscriptionsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Subscriptions',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ width: 24, height: 24, margin: 5 }}>
//           <Icon name={'subscriptions'} size={20} style={{ color: tintColor }} />
//           {focused ? null : <View
//             style={{
//               // /If you're using react-native < 0.57 overflow outside of the parent
//               // will not work on Android, see https://git.io/fhLJ8
//               position: 'absolute',
//               right: 0,
//               top: 0,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 8,
//               height: 8,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//           </View>}
//         </View>
//       ),
//     }
//   },
//   InboxScreen: {
//     screen: InboxScreen,
//     navigationOptions: {
//       tabBarLabel: 'Inbox',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Icon name={'mail'} size={20} style={{ color: tintColor }} />
//       ),
//     }
//   },
//   LibraryScreen: {
//     screen: LibraryScreen,
//     navigationOptions: {
//       tabBarLabel: 'Library',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Icon name={'folder'} size={20} style={{ color: tintColor }} />
//       ),
//     }
//   },
// });
