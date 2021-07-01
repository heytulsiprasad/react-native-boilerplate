// @flow

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  color: string,
};

class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;

    return (
      <HomeButton color={color}>
        <StyledText>Navigate</StyledText>
      </HomeButton>
    );
  }
}

const HomeButton = styled.TouchableOpacity`
  padding: 20px;
  background-color: ${props => props.color};
  border-radius: 5px;
`;

const StyledText = styled.Text`
  font-size: 18px;
`;

export default Home;
