import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductDetails = () => {
  const navigation = useNavigation();

  const { id } = useLocalSearchParams();
  const product = products.find((prod) => prod.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Detalles',
    });
  }, [product]);

  if (!product) return <Redirect href="/" />;

  return (
    <View className="mt-10 px-4">
      <Text className="text-2xl font-work-semibold">{product!.title}</Text>
      <Text className="font-work-regular">{product!.description}</Text>
    </View>
  );
};

export default ProductDetails;
