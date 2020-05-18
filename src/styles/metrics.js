import { Dimensions, StatusBar } from 'react-native';

const {width, height } = Dimensions.get('screen');

const marginBar = StatusBar.currentHeight;

export default {
    width,
    height,
    marginBar
};