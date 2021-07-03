// @flow

import React from 'react';
import styled from 'styled-components/native';
import type { Node } from 'react';

import Button from './../components/Button';

const Home = ({ navigation }): Node => {
  return (
    <StyledView>
      <Button
        onPress={() =>
          navigation.navigate('Details', { name: 'More Details About Us' })
        }>
        Details
      </Button>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default Home;
