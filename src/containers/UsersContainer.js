import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import UserCard from "../components/UserCard";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    const { users } = this.props;
    return users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <UserCard detail={user} />
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersContainer);
