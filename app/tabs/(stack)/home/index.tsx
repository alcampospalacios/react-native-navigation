import CustomButton from '@/components/core/custom-button';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          children="Productos"
          onPress={() => router.push('/tabs/(stack)/products')}
          className="mb-2"
        />
        <CustomButton
          children="Perfil"
          onPress={() => router.push('/tabs/(stack)/profile')}
          className="mb-2"
          color="secondary"
        />
        <CustomButton
          children="Configuraciones"
          onPress={() => router.push('/tabs/(stack)/settings')}
          className="mb-2"
          color="tertiary"
        />
        {/* <CustomButton children="Perfil" />
        <CustomButton children="Configuraciones" /> */}
        {/* <Link href="/products">Productos</Link>
      <Link href="/profile">Perfil</Link>
      <Link href="/settings">Configuraciones</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
