import React, {Component} from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e) {
        this.setState({
            newProject: {
                title: this.refs.title.value,
                category: this.refs.category.value
            }
        }, function () {
            this
                .props
                .addProject(this.state.newProject);
        });
        e.preventDefault();
    }

    render() {

        let categoryOptions = this
            .props
            .categories
            .map(category => {
                return <option key={category} value={category}>{category}</option>
            });

        return (
            <div>
                <div className="col-md-12">
                    <h1>Add Projects</h1>
                </div>
                <div className="col-md-12">
                    <form
                        onSubmit={this
                        .handleSubmit
                        .bind(this)}>
                        <div className="col-md-4">
                            <label>Title</label><br/>
                            <input className="form-control" type="text" ref="title"/>
                        </div>
                        <div className="col-md-4">
                            <label>Category</label><br/>
                            <select className="form-control" ref="category">
                                {categoryOptions}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label></label><br/>
                            <input className="btn col-md-12" type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProject;