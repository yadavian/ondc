/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { COLORS } from './src/constants/Colors';

if (Text.defaultProps == null) Text.defaultProps = {};

Text.defaultProps.style = {
    fontFamily: 'Poppins-Regular',
    color: COLORS.BLACK
}
Text.defaultProps.allowFontScaling=false

AppRegistry.registerComponent(appName, () => App);
