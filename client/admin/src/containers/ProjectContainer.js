import React, { Component } from 'react'
import ProjectComponent from '../components/project/ProjectComponent';
class ProjectContainer extends Component {
    render() {
        return (
            <ProjectComponent {...this.props} />
        )
    }
}

export default ProjectContainer;
