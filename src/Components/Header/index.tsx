import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './style';

interface HeaderProps {
  image: string;
}

export default function Header({ image }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name='menu' size={24} color='#ddd' style={{ marginLeft: 10 }} />
        <TextInput
          placeholder='Search email'
          placeholderTextColor={'#ddd'}
          style={styles.textInput}
        />
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
}
