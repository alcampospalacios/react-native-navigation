import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((prod) => prod.id === id);

  if (!product) return <Redirect href="/products" />;

  return (
    <View className="mt-10 px-4">
      <Text className="text-2xl font-work-semibold">{product!.title}</Text>
      <Text className="font-work-regular">{product!.description}</Text>
    </View>
  );
};

export default ProductDetails;
