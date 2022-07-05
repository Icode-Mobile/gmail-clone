import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  containerOpen: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
    backgroundColor: '#0071b3',
    width: '30%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    marginLeft: 5,
  },
  containerClose: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
    backgroundColor: '#0071b3',
    width: '13%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
