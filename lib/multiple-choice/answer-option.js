import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Check from '../../static/green-check.png';
import styles from './answer-option-styles';

class AnswerOption extends React.Component{

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.getRadio = this.getRadio.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
    this.state = {
      selected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { answer, selection } = nextProps;
    this.setState({ selected: _.isEqual(answer, selection) });
  }

  clickHandler() {
    const answerIndex =_.get(this, 'props.index');
    const answerOption =_.get(this, 'props.answer');
    this.props.onAnswerSelected({answerIndex, answerOption});
  }

  getRadio() {
    return this.state.selected ?
      <img style={_.merge(styles.radio,styles.check)} src={Check}/> :
      <div style={styles.radio} />;
  }

  toggleSelected() {
    this.setState({selected:!_.get(this, 'selected')});
  }

  render() {

    return (<div style={styles.option} onClick={this.clickHandler}>
      { this.getRadio() }
      <span style={styles.label}>{_.get(this, 'props.answer')}</span>
    </div>);
  }
}

AnswerOption.propTypes = {
  selection: PropTypes.string,
  answer: PropTypes.string,
  index: PropTypes.number,
  onAnswerSelected: PropTypes.func
};

export default Radium(AnswerOption);