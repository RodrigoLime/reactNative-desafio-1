import { View, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { colors } from './src/styles/colors';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Header/>
      <View style={{backgroundColor: colors.gray600, flex: 1}}>
        <Home />
      </View>
    </>
  );
}


