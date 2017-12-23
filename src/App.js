import React, {Component} from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Buiseness Website",
          category: "Web Design"
        }, {
          title: "Social App",
          category: "Mobile Development"
        }, {
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
  render() {
    return (
      <div className="container">
        <div className="App col-md-12 text-center bg-success">
          <h1>React App</h1>
        </div>
        <div className="col-md-12">
          <AddProject
            addProject={this
            .handleAddProject
            .bind(this)}/>
        </div>

        <div className="col-md-12 m-t-1">
          <Projects projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default App;
