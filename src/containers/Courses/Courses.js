import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };

    courseSelectedHandler = (id, title) =>{
        console.log("Course selected with id: ",id);
        //this.setState({selectedPostId: id});
        this.props.history.push('/courses/'+title+'/'+id);
    };


    render () {

        let courses = null;

        courses =  this.state.courses.map( course => {
                        return <article className="Course" key={course.id} onClick={()=> this.courseSelectedHandler(course.id, course.title)} title={course.title} id={course.id}>
                                    {course.title}
                                </article>
                    });

        console.log("Courses arrays jsx: ", courses);

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>

                <Route path={this.props.match.url + '/:title'+'/:id'} component={Course}/>
            </div>
        );
    }
}

export default Courses;