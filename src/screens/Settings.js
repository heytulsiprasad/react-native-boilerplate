// @flow

import React from 'react';
import styled from 'styled-components/native';
import type { Node } from 'react';

import Button from './../components/Button';

const Settings = ({ navigation }): Node => {
  return (
    <StyledView>
      <Button heading>Settings</Button>
      <Button
        onPress={() =>
          navigation.navigate('Details', { name: 'More details from Settings' })
        }>
        Want to go to More Details?
      </Button>
      <Button onPress={() => navigation.toggleDrawer()}>Drawer</Button>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default Settings;
