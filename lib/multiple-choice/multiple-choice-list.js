import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Radium from 'radium';
import AnswerOption from './answer-option';
import styles from './styles';

class MultipleChoice extends React.Component{

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelection(selection){
    this.setState({
      answerOption: selection.answerOption,
      answerIndex: selection.answerIndex
    });
    _.get(this, 'props.onAnswerSelected')(selection);
  }

  handleSubmit(){
    const onAnswerSubmitFunc = _.get(this,'props.onAnswerSubmit');
    const answerIndex = _.get(this, 'state.answerIndex');
    const answerOption = _.get(this, 'state.answerOption');
    onAnswerSubmitFunc({answerIndex, answerOption});
  }

  renderAnswerOptions(answer, key) {
    return (
      <AnswerOption
        key={key}
        index={key}
        answer={answer}
        selection={_.get(this,'state.answerOption')}
        onAnswerSelected={this.handleSelection}
      />
    );
  }

  render() {
    return (
      <div style={_.merge(_.get(styles,'container'),_.get(this,'props.style'))}>
        <h2>{_.get(this,'props.question')}</h2>
        <ul style={{padding:'0'}}>
          {_.map(_.get(this,'props.answers'), this.renderAnswerOptions)}
        </ul>
        <div style={_.get(styles, 'buttonArea')}>

          <input
            disabled={_.isNil(_.get(this, 'state.answerOption'))}
            style={_.get(styles, 'submit')}
            type="submit"
            onClick={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func,
  onAnswerSubmit: PropTypes.func
};

export default Radium(MultipleChoice);