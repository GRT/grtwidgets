import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import logo from '../../static/logo.svg';
import headerStyles from './app-header-styles';

class AppHeader extends Component {

  render() {
    const { title, userName, subTitle } = this.props;
    return React.createElement(
      'header',
      { style: _.get(headerStyles, 'appHeader') },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: _.get(headerStyles, 'appTitle') },
          ' ',
          title,
          ' '
        ),
        React.createElement(
          'p',
          { style: _.get(headerStyles, 'appLogo') },
          React.createElement('img', { src: logo, alt: 'logo' })
        ),
        React.createElement(
          'div',
          { style: _.get(headerStyles, 'appUserName') },
          ' ',
          userName,
          ' '
        )
      ),
      React.createElement(
        'div',
        { style: _.get(headerStyles, 'appSubTitle') },
        ' ',
        subTitle,
        ' '
      )
    );
  }
}

export default AppHeader;

// Type checking
//   - errors show in console
//   - only run in dev mode
//
AppHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  userName: PropTypes.string
};