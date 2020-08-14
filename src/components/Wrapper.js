import React from "react";
import directory from "../directory.json";

//TODO expand sections like the buttons and form into their own components and make them able to pass data

class Wrapper extends React.Component {
    state = {
        sortedList: directory,
        namequery: '',
        rolequery: ''
    };
    handleSortByName = () => {
        this.setState({ sortedList: directory.sort((a, b) => (a.Name > b.Name) ? 1 : -1) })
    };
    handleSortByNameDesc = () => {
        this.setState({ sortedList: directory.sort((a, b) => (a.Name < b.Name) ? 1 : -1) })
    };
    handleSortByRole = () => {
        this.setState({ sortedList: directory.sort((a, b) => (a.Role > b.Role) ? 1 : -1) })
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.namequery) {
            let namequery = this.state.namequery.trim();
            var filterresult = directory.filter(function (data) {
                return data.Name === namequery;
            });
            this.setState({
                sortedList: filterresult,
                namequery: '',
                rolequery: ''
            });
        } else {
            let rolequery = this.state.rolequery.trim();
            var filterresult2 = directory.filter(function (data) {
                return data.Role === rolequery;
            });
            this.setState({
                sortedList: filterresult2,
                namequery: '',
                rolequery: ''
            });
        }
    };

    render() {
        return (
            <div>
                <div className="card-body">

                    {/* button div */}
                    <div>
                        <p className="card-text">Sort by: </p>
                        <button className="btn btn-primary" onClick={this.handleSortByName}>
                            Sort by Name
                    </button>{" "}
                        <button className="btn btn-primary" onClick={this.handleSortByNameDesc}>
                            Sort by Name Desc
                    </button>{" "}
                        <button className="btn btn-danger" onClick={this.handleSortByRole}>
                            Sort by Role
                    </button>
                    </div>
                    {/* button div */}

                    {/* forms div */}
                    <div>
                        <h4>Filter by Name</h4>
                        <form className="form">
                            <input
                                value={this.state.namequery}
                                onChange={this.handleInputChange}
                                name="namequery"
                                type="text"
                            />
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                    <div>
                        <h4>Filter by Role</h4>
                        <form className="form">
                            <input
                                value={this.state.rolequery}
                                onChange={this.handleInputChange}
                                name="rolequery"
                                type="text"
                            />
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                    {/* forms div */}

                    {/* list div */}
                    <ul className="list-group">
                        {this.state.sortedList.map(result => (
                            <li className="list-group-item" key= {result.id}>
                                {result.Name} --- {result.Role} --- {result.Department}
                            </li>
                        ))}
                    </ul>
                    {/* list div */}
                </div>
            </div>
        );
    }
}
export default Wrapper;