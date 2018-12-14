import React, { Component } from 'react';

class Course extends Component {

    componentDidMount() {
        console.log("Course did mount with props: ",this.props);
    }

    render () {
        return (
            <article>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </article>
        );
    }
}

export default Course;