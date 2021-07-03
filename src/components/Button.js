// @flow

import React from 'react';
import styled from 'styled-components/native';
import type { Node } from 'react';

type Props = {
  title: string,
};

const Button = ({ children, heading, ...rest }: Props): Node => (
  <NavLink {...rest}>
    <StyledText heading={heading}>{children}</StyledText>
  </NavLink>
);

const NavLink = styled.TouchableOpacity``;

const StyledText = styled.Text`
  color: ${props => (props.heading ? 'gray' : 'tomato')};
  font-weight: bold;
  font-size: ${props => (props.heading ? '22px' : '16px')};
`;

export default Button;
