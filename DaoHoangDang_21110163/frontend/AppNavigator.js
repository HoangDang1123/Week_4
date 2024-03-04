import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as screens from "./screens";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return <DrawerContentScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image source={{ 
                uri: 'https://i.pinimg.com/564x/40/70/d9/4070d9574b34038f45af74f6221ec19a.jpg'}}

                style={{ width: 100, height: 100, borderRadius: 30, margin: 20 }}
            />
            <View style={{ justifyContent: 'center'}}>
                <Text>Duck UI</Text>
                <Text>a@gmail.com</Text>
            </View>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}