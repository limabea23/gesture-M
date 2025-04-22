import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Details1() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Details1')}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorocinema.com%2Fseries%2Fserie-27540%2F&psig=AOvVaw2DK1tMxFw6RLArYa2HT3ey&ust=1745432966792000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiP3fyi7IwDFQAAAAAdAAAAABAE',
            }}
          />
        </TouchableOpacity>
      </View>
    );
}