import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { Container } from './styles';
import metrics from '../../styles/metrics';

import Slideitem from '../SlideItem';

const SlideShow = (props) => {
  return (
      <Container>
          <Carousel 
            ref={props.ref}
            style={{ flex: 1, overflow: 'visible' }}
            data={props.data}
            renderItem={({ item }) => (
                <Slideitem 
                    item={item}
                    share={props.share}
                    handleDetails={props.handleDetails}
                />
            )}
            sliderWidth={metrics.width}
            itemWidth={metrics.width * 0.75}
            onSnapToItem={props.changeCurrent}
            inactiveSlideOpacity={.5}   

        />
      </Container>
  );
}

export default SlideShow;