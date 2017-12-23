import React, {Component} from 'react';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css";

class ProjectItem extends Component {
    render() {
        return (
            <li className="Project">
                <strong>
                    {this.props.project.title}
                    - {this.props.project.category}
                </strong>
            </li>
        )
    }
}

export default ProjectItem;