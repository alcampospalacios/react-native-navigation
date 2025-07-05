import { Redirect } from 'expo-router';
import React from 'react';

const App = () => {
  return (
    // <Redirect href="/home" />
    <Redirect href="./tabs" />
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-xl text-primary font-work-bold">Welcome to Nativewind!</Text>
    //   <Text className="text-xl text-secondary-200 font-work-semibold">Welcome to Nativewind!</Text>
    //   <Text className="text-xl text-tertiary font-work-regular">Welcome to Nativewind!</Text>

    //   <Link href="/products">
    //     <Text className="text-xl text-primary font-work-bold">Ir a productos</Text>
    //   </Link>
    // </View>
  );
};

export default App;
