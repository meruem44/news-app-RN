import React, { useState, useEffect, useRef } from 'react';
import { Share } from 'react-native';
import api from '../../services/api';

import { Container, Fundo } from './styles';

import SlideShow from '../../components/SlideShow'; 

const home = ({ navigation }) => {
  const carousel = useRef(null);

  const [list, setList] = useState([]);
  const [initialBack, setInitialBack] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    api.get('/top-headlines', {
      params: {
        country: 'br',
        apiKey: 'f8e172e113844828b3174448d4efcabc'
      }
    }).then(response => {
      if (response.data.status === 'ok') {
        setList(response.data.articles);
        console.log(response.data.articles);
        setInitialBack(response.data.articles[0].urlToImage);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  const changeCurrent = index => {
    setInitialBack(list[index].urlToImage);
    setCurrentIndex(index);
  };

  const handleDetails = url => {
    navigation.navigate('details',{
      url: url
    });
  }

  const share = async url => {
    try {
      let shared = await Share.share({
        message: url
      });

    }catch(err) {

    }
  };

  return (
    <Container>
      <Fundo source={{ uri: initialBack }} blurRadius={4}>
          <SlideShow 
            data={list}
            ref={carousel}
            changeCurrent={changeCurrent}
            handleDetails={handleDetails}
            share={share}
          />
      </Fundo>
    </Container>
  );
}

export default home;