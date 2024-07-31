import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        background: '#ffffff',
        text: '#000000',
    },
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#bb86fc',
        background: '#000000',
        text: '#ffffff',
    },
};