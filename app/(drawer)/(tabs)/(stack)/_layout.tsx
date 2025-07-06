import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  const navigation = useNavigation();
  const onToggleDrawer = (canGoBack: boolean | undefined) => {
    console.log(canGoBack);
    if (canGoBack === true) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false, // Ocultar el appbar
        headerShadowVisible: false, // Ocultar la sombra del appbar
        contentStyle: {
          backgroundColor: 'white', // Cambiar el color del background del scaffold a  blanco
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            onPress={() => onToggleDrawer(canGoBack)}
            name={canGoBack === true ? 'arrow-back' : 'menu-outline'}
            size={24}
            color={tintColor}
          />
        ),
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
