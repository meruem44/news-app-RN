import React from 'react';

import {
    Container,
    Image,
    Title,
    Description,
    Footer,
    Author,
    Date,
    Button,
    Content
} from './styles';

import Icon from '@expo/vector-icons/MaterialIcons';

const SlideItem = (props) => {

    return (
        <Container>
            <Image resizeMode="cover" source={{ uri: props.item.urlToImage }} />
            <Title numberOfLines={2}>{props.item.title}</Title>
            <Description numberOfLines={4}>{props.item.content}</Description>
            <Footer>
                <Author>{`Fonte: ${props.item.author}`}</Author>
                <Content>
                    <Button onPress={() => props.share(props.item.url)} >
                        <Icon
                            name="share"
                            color="#9157c1"
                            size={30}
                        />
                    </Button>

                    <Button onPress={()=> props.handleDetails(props.item.url)}>
                        <Icon
                            name="keyboard-arrow-right"
                            color="#9157c1"
                            size={40}
                        />
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

export default SlideItem;