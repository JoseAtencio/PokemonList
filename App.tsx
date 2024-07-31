import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import {store} from './src/Redux'; // Asegúrate de que la ruta sea correcta
import AppNavigator from './src/Routes/routeInit';
import { lightTheme, darkTheme } from './src/Config/Theme'; // Asegúrate de que la ruta sea correcta
import { useAppSelector } from './src/Redux/hooks';
import { selectGenearlSlice } from './src/Redux/features/generalSlice';


export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}


function MainApp()  {
  const { theme } = useAppSelector(selectGenearlSlice) || { theme: 'light' };
  const paperTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <AppNavigator />
    </PaperProvider>
  );
};
