import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers({ id, name, email }) {
    return (
      <li className="list-group-item" key={id}>
        <h4>
          <span className="label label-danger ">
            {name}
          </span>
        </h4>
        <a href={email}>
          {email}
        </a>
      </li>
    );
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Email Directory</h2>
        <ul className="list-group">
          {this.props.users.map(this.renderUsers)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(App);
