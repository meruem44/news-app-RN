import styled from 'styled-components/native';

import metrics from '../../styles/metrics';

export const Container = styled.View`
    height: ${metrics.height * 0.6};
    background-color: #fff;
    border-radius: 10px;

`;

export const Image = styled.Image`
    width: 100%;
    height: 50%;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #444;
    padding: 10px;
`;

export const Description = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #666;
    padding: 10px;
`;

export const Footer = styled.View`
    height: 15%;
    border-top-width: 1px;
    border-color: #999;
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8%;
`;

export const Author = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #888;
    width: 50%;
`;

export const Date = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #888;
`;

export const Button = styled.TouchableOpacity`

`;

export const Content = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: space-around;
`;