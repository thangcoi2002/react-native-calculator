import React, { ReactNode, useState } from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Constants } from '../common/Constant';

const { width } = Dimensions.get('window');

interface ButtonCustomProps {
  label?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  icon?: ReactNode;
  operation?: boolean;
  btnOperation?: boolean;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  label,
  onPress,
  icon,
  operation,
  btnOperation,
  containerStyle,
  textStyles
}) => {
  const [backgroundColor, setBackgroundColor] = useState("#333")


  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={btnOperation ? 0.8 : 1}
      onPressIn={() => setBackgroundColor('#cccccc80')}
      onPressOut={() => setBackgroundColor('#333')}
      style={[
        styles.btn,
        containerStyle,
        { backgroundColor: backgroundColor },
        btnOperation && {
          backgroundColor: operation ? Constants.white : Constants.orange,
        },
      ]}>
      {icon ? (
        <>{icon}</>
      ) : (
        <Text
          style={[
            styles.txt, textStyles,
            btnOperation && {
              color: operation ? Constants.orange : Constants.white,
            },
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4 - 17,
    height: width / 4 - 17,
    backgroundColor: Constants.darkColor,
    borderRadius: 9999,
    margin: 8,
  },
  txt: {
    color: Constants.white,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '600',
  },
  icon: {
    height: width / 4 - 70,
    width: width / 4 - 70,
  },
});

export default ButtonCustom;
