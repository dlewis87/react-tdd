import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0 || !bitcoin.USD) {
      return '';
    }
    const rate = parseInt(bitcoin.USD.rate.replace(',', ''), 10);
    return this.props.balance / rate;
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    );
  }
}

Loot.propTypes = {};
Loot.defaultProps = {};

export default connect(state => state, { fetchBitcoin })(Loot);