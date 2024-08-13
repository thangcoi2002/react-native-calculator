import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

import { Constants } from '../common/Constant';
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface VectorIconProps {
  name: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  color?: string;
}

export const MaterialCommunityIcon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <MaterialCommunityIcons
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}


export const Ionicon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <Ionicons
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const AntDesignIcon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <AntDesign
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const FontAwesome5Icon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <FontAwesome5
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const FontAwesome6Icon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <FontAwesome6
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const FoundationIcon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <Foundation
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const FontAwesomeIcon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <FontAwesome
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}

export const EntypoIcon: React.FC<VectorIconProps> = ({
  name,
  size = 24,
  style = {}, 
  color = Constants.black, 
}) => {
    return (
      <Entypo
          name={name}
          size={size}
          style={style ? style : {}}
          color={color ? color : Constants.black}
      />
  );
}