import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import headerStyles from './app-header-styles';

class AppHeader extends Component {
  
  render() {
    const {title, userName, subTitle} = this.props;
    return (
      <header style={_.get(headerStyles, 'appHeader')}>
        <div>
          <div style={_.get(headerStyles, 'appTitle')}> { title } </div>
          <div style={_.get(headerStyles, 'appUserName')}> { userName } </div>
        </div>
        <div style={_.get(headerStyles, 'appSubTitle')}> { subTitle } </div>
      </header>
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

