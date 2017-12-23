import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css";

class Projects extends Component {
    render() {
        let projectItems;

        if (this.props.projects) {
            projectItems = this
                .props
                .projects
                .map(project => {
                    return (<ProjectItem key={project.title} project={project}/>);
                });
        }

        console.log(this.props);

        return (
            <div className="col-md-12 m-t-1">
                <div className="Projects col-md-12 center">
                    <h1>
                        My Projetcs
                    </h1>
                </div>
                <div className="col-md-12">
                    {projectItems}
                </div>
            </div>
        );
    }
}

export default Projects;