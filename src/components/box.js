import React, { Component } from 'react'
import './box.css';

export default class Box extends Component {
    render() {
        return (
                <button className="mb-2" onClick={this.props.clickMe} > 
                    <h1>{this.props.val}</h1> 
                </button>
        )
    }
}
