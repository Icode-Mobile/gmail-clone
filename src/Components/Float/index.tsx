import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { style } from './style';

type FloatProps = {
  open: boolean;
};

export default function Float({ open }: FloatProps) {
  return (
    <View style={open ? style.containerOpen : style.containerClose}>
      <Feather name='edit-2' size={20} color='#fff' />
      {open ? <Text style={style.title}> Compose </Text> : null}
    </View>
  );
}
