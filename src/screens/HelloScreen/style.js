import {StyleSheet} from 'react-native';
import Theme from '../../assets/style/App.style';
import {StatusBar, Platform} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? -20 : -StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  textContainer: {paddingTop: '35%'},
  bigText: {
    color: Theme.primary_text_color,
    fontSize: 52,
  },
  text: {
    color: Theme.primary_text_color,
    fontSize: 14,
  },
});

export default style;
