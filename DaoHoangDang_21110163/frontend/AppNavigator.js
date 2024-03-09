import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as screens from "./screens";
import MenuComponent from './components/MenuComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView>
            <MenuComponent/>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export const HomeMenu = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
            <Drawer.Screen name="Home" component={screens.HomeScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Account" component={screens.AccountScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Friend" component={screens.FriendScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Cart" component={screens.CartScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Level" component={screens.LevelScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Revenue" component={screens.RevenueScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
            <Drawer.Screen name="Map" component={screens.MapScreen} options={{ headerShown: false, drawerPosition: 'right'}} />
        </Drawer.Navigator>
    )
}

export default HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{gestureEnabled: false}}>
                <Stack.Screen name="Welcome" component={screens.WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeMenu" component={HomeMenu} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name="SignUp" component={screens.SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={screens.ProfileScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}