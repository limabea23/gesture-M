import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Details1() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Details2')}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffilmow.com%2Fclub-57-2a-temporada-t336549%2F&psig=AOvVaw2Wn9NZ290ZnpoWaKEDqbI8&ust=1745432984191000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCV5YSj7IwDFQAAAAAdAAAAABAK',
            }}
          />
        </TouchableOpacity>
      </View>
    );
}