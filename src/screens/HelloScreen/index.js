import React from 'react';
import {View, Text, StatusBar, ImageBackground, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import Theme from '../../assets/style/App.style';

type Props = {};

const HelloScreen = (props: Props): React.FC => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={style.container}>
        <ImageBackground
          source={require('../../assets/bg/mountain.png')}
          resizeMode="cover"
          style={style.image}>
          <View style={style.textContainer}>
            <Text style={style.bigText}>Hello</Text>
            <Text style={style.text}>
              204次直播 · 53个系列课程 · 7301人已加入
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default HelloScreen;
