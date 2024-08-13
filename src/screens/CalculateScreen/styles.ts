import {Dimensions, StyleSheet} from 'react-native';
import {Constants} from '../../common/Constant';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.mainColor,
  },
 
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  icon: {
    height: width / 4 - 70,
    width: width / 4 - 70,
  },
});
