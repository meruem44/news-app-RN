import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Container } from './styles';

const details = ({ route, navigation }) => {
  const [load, setLoad] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const { url } = route.params;
    setUrl(url);
    setLoad(false);

  }, []);

  return (
    <WebView
          style={{ flex: 1 }}
          source={{ uri: url }}
      />
  );
}

export default details;