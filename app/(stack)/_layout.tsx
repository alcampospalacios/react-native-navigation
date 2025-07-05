import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home/index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="products/index" options={{ title: 'Productos' }} />
      <Stack.Screen name="profile/index" options={{ title: 'Perfil' }} />
      <Stack.Screen name="settings/index" options={{ title: 'Configuraciones' }} />
    </Stack>
  );
};

export default StackLayout;
