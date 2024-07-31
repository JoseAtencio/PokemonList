import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoadingScreen, PlantillaScreen } from '../Screens';
import { ROUTE_STACK } from '../Helpers/constants';

const Stack = createStackNavigator();

interface ScreenOptions extends StackNavigationOptions {
    headerShown: boolean;
}

const OptionScreen: ScreenOptions = { headerShown: false };

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTE_STACK.RootInitNav.loading} screenOptions={OptionScreen}>
                <Stack.Screen name={ROUTE_STACK.RootInitNav.loading} component={LoadingScreen} />
                <Stack.Screen name={ROUTE_STACK.RootDev.plantilla} component={PlantillaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;