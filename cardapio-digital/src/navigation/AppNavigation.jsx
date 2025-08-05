import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../screens/Home"
import {CategoriaProduto} from "../screens/CategoriaProduto";
import {DetalhesProduto} from "../screens/DetalhesProduto";

const Stack = createNativeStackNavigator();
export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="CategoriaProduto" component={CategoriaProduto} options={{headerShown: false}} />
                <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}