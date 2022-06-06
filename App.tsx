import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

///Esse é o primeiro arquivo a ser lido no React Native

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Open up App.tsx to start working on your app! </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
