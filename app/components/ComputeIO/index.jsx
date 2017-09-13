import React from 'react';

const { Component } = React;

import Input from '../common/Input';

import Button from '../common/Button';

import { isClosed } from '../../utils/common.js'

import styles from '../../styles/app.css';

export class Output extends Component {
  render() {
    return (
      <div className={styles.outputArea}>
        {this.props.text}
      </div>
    );
  }
}

export class ComputeIO extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    };
  }

  computeOutput() {
    this.setState({
      output: `${isClosed(this.state.input)}`
    });
  }

  render() {
    return (
      <section style={{textAlign: 'left', fontSize: '16px'}}>
        <div style={{marginBottom: '10px'}}>Input:</div>
        <Input text={this.state.input} onChange={(input) => {this.setState({input})}}/>
        <Button onClick={() => this.computeOutput()}/>
        <div style={{marginBottom: '10px'}}>Output:</div>
        <Output text={this.state.output}/>
      </section>
    );
  }
}
