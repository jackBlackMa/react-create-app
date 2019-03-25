import React, { Component } from 'react';




class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    handleClick = e => {
        e.preventDefault();
        const { count } = this.state;
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>
                    {count}
                </p>
                <a onClick={this.handleClick} href="#">add</a>
            </div>
        )
    }



}

export default Counter