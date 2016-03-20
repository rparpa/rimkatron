/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { generate } from '../../sentence_generators/ShouldWeTake';
import Maclouf from '../../../img/maclouf.png';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = { text: generate() };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({text: generate()});
    }

    render() {
        var text = this.state.text;
        return (
            <div>
                <blockquote className="home__blockquote">
                    <p>{ text }</p>
                </blockquote>
                <img onClick={this.handleClick} className="home__maclouf btn" src={ Maclouf } />
            </div>
            );
        }
    }

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
