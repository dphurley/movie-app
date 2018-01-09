import React, { Component } from 'react'

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>Rating: {this.props.rating}</div>
                <div>Description: {this.props.description}</div>
            </div>
        )
    }
}

export default Movie
