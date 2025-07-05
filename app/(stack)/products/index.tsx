import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-semibold">{item.title}</Text>
            <Text className="font-work-regular">{item.description}</Text>
            <View className="flex flex-row justify-between mt-5">
              <Text className="font-work-regular">{item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`} className="text-primary">
                <Text className="font-work-regular">Ver detalles</Text>
              </Link>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductsScreen;
