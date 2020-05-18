import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/home';
import Details from './pages/details';
import Favorited from './pages/favorited';

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ title: "Feed de noticias" }} />
                <Stack.Screen 
                name="details" 
                options={{title: "Detalhes da noticia"}}
                component={Details} />
                <Stack.Screen name="favorited" component={Favorited} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;