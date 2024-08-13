import React, {useRef} from 'react';
import {PanResponder, StyleSheet, Text, View} from 'react-native';
import {Constants} from '../common/Constant';
import {formatNumber} from '../common/commons';

interface DisplayOutputProps {
  swipe: () => void;
  text: string;
}

const DisplayOutput: React.FC<DisplayOutputProps> = ({text,swipe}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx >= 10 || gestureState.dx <= -10) {
          swipe();
        }
      },
    }),
  ).current;
  
  return (
    <View style={styles.output} {...panResponder.panHandlers}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.5}
        style={styles.txtAnswer}>
        {formatNumber(text)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  output: {
    height: '36%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  txtAnswer: {
    width: '100%',
    color: Constants.white,
    fontWeight: '400',
    fontSize: 100,
    textAlign: 'right',
  },
});

export default DisplayOutput;
