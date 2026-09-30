import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.23.165:3000';

export default function App() {
  const [likes, setLikes] = useState(14);

  const darLike = async () => {
    const respuesta = await fetch(
      API_URL + '/mascotas/1/like',
      { method: 'PATCH' }
    );

    const mascota = await respuesta.json();
    setLikes(mascota.likes);
  }}