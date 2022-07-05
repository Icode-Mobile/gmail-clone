import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import Header from '../../Components/Header';
import Float from '../../Components/Float';

import { styles } from './style';

const apiMessage = [
  {
    id: 1,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: '11:00',
    star: false,
    visualized: false,
  },
  {
    id: 2,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jun 3',
    star: true,
    visualized: false,
  },
  {
    id: 3,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
  {
    id: 4,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
  {
    id: 5,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
  {
    id: 6,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
  {
    id: 7,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
  {
    id: 8,
    name: 'Caio Cosenza',
    image: 'https://github.com/Caio18-cosenza.png',
    title: 'Boas vindas',
    body: 'Olá Icode, seja muito bem vindo ao seu novo Gmail Clone',
    date: 'Jan 20',
    star: false,
    visualized: true,
  },
];

let nome = 'Icode Mobile';

export default function Home() {
  const [status, setStatus] = useState<boolean>(true);

  let firstLetterName = nome.substring(0, 1);
  console.log(firstLetterName);

  return (
    <View style={styles.container}>
      <Header image='http://github.com/Icode-Mobile.png' />
      <FlatList
        data={apiMessage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ index, item }) => (
          <View style={{ margin: 12, flexDirection: 'row' }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 44, height: 44, borderRadius: 22 }}
            />
            <View style={{ flexDirection: 'column', flex: 1, marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: item.visualized ? '#cdcdcd' : '#fff',
                  }}
                >
                  {' '}
                  {item.name}{' '}
                </Text>
                <Text
                  style={{
                    color: item.visualized ? '#cdcdcd' : '#fff',
                  }}
                >
                  {' '}
                  {item.date}{' '}
                </Text>
              </View>
              <Text
                style={{
                  color: item.visualized ? '#cdcdcd' : '#fff',
                }}
              >
                {' '}
                {item.title}{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: '#cdcdcd',
                    fontWeight: '100',
                    width: '88%',
                  }}
                  numberOfLines={1}
                >
                  {' '}
                  {item.body}{' '}
                </Text>
                <EvilIcons
                  name='star'
                  size={24}
                  color='#cdcdcd'
                  style={{ marginRight: 10 }}
                />
              </View>
            </View>
          </View>
        )}
        style={styles.flatlist}
        ListHeaderComponent={() => (
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: '#cdcdcd' }}> Primary </Text>
          </View>
        )}
        onScroll={(event) => {
          if (event.nativeEvent.contentOffset.y > 20) {
            setStatus(false);
          } else {
            setStatus(true);
          }
        }}
      />
      <Float open={status} />
    </View>
  );
}
