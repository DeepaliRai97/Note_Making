import React from 'react';
import Nav from './navigation/Nav';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import {Provider as NoteProvider} from './src/context/NoteContext'
const App = () => {
  return (
    <NoteProvider>
  <Nav/>
  </NoteProvider>
  )
};
export default App;