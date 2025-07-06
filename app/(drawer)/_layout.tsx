import CustomDrawer from '@/components/core/custom-drawer';
import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <FontAwesome size={size} name="home" color={color} />,
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Configuración de usuario',
          drawerIcon: ({ color, size }) => <FontAwesome size={size} name="user" color={color} />,
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Calendario',
          title: 'Calendario',
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="calendar" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
