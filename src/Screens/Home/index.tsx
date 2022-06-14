import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../Components/Header';

import { styles } from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header image='http://github.com/Icode-Mobile.png' />
    </View>
  );
}
