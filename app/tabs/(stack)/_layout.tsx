import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false, // Ocultar el appbar
        headerShadowVisible: false, // Ocultar la sombra del appbar
        contentStyle: {
          backgroundColor: 'white', // Cambiar el color del background del scaffold a  blanco
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="products/index" options={{ title: 'Productos' }} />
      <Stack.Screen name="profile/index" options={{ title: 'Perfil' }} />
      <Stack.Screen name="settings/index" options={{ title: 'Configuraciones' }} />
    </Stack>
  );
};

export default StackLayout;
