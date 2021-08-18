import React from 'react';
import {View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from '../components/icons';
import Theme from '../assets/style/App.style';
import HelloScreen from '../screens/HelloScreen';
import WorldScreen from '../screens/WorldScreen';

const Navigation = (props): React.FC => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Theme.tab_active_color,
            tabBarInactiveTintColor: Theme.tab_inactive_color,
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 15,
              paddingBottom: Platform.OS === 'android' ? 15 : 0,
            },
            tabBarStyle: {height: Theme.tab_height},
          }}>
          <Tab.Screen
            name="Hello"
            options={{
              tabBarLabel: '首页',
              tabBarIcon: ({focused, color, size}) => (
                <View
                  style={{marginBottom: Platform.OS === 'android' ? -15 : 0}}>
                  <Icon
                    name={focused ? 'home' : 'home-inactive'}
                    height={20}
                    width={20}
                  />
                </View>
              ),
            }}
            component={HelloScreen}
          />
          <Tab.Screen
            name="World"
            options={{
              tabBarLabel: '通知',

              tabBarIcon: ({focused, color, size}) => (
                <View
                  style={{marginBottom: Platform.OS === 'android' ? -15 : 0}}>
                  <Icon
                    name={focused ? 'bell' : 'bell-inactive'}
                    height={20}
                    width={20}
                  />
                </View>
              ),
            }}
            component={WorldScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
