import { Text, Image, View, Button } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Layout } from 'react-native-rapi-ui';
import React from 'react';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function () {
  const [count, setCount] =  React.useState(0)
  return (
    <Layout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'My home',
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }}
      />
      <Text>Home Screen {count}</Text>
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
    </Layout>
  )
}