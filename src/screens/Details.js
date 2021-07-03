// @flow

import React from 'react';
import styled from 'styled-components/native';
import type { Node } from 'react';

import Button from './../components/Button';

const Details = ({ navigation, route }): Node => {
  return (
    <StyledView>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      <StyledTitle>{route.params.name && route.params.name}</StyledTitle>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.Text``;

export default Details;
