import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  static propTypes = {
    language: PropTypes.string,
  };

  render() {
    return (
      <div>
        <ButtonLanguage>{this.props.language}</ButtonLanguage>
      </div>
    );
  }
}

const ButtonLanguage = styled.button`
  background-color: black;
  color: #fff;
`;
