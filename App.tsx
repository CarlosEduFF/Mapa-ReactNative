import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import Mapa from './components/Mapa';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Pesquisar local..."
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      />
    </View>
    
  );
}