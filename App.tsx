import { StatusBar } from 'expo-status-bar';

import Home from './src/Screens/Home';

///Esse é o primeiro arquivo a ser lido no React Native

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#222' translucent />
      <Home />
    </>
  );
}
