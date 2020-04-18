import React from "react";
import { connect } from "react-redux";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="content">
        <img
          className="right floated ui mini circular image"
          alt="avatar"
          src={user.avatar}
        />
        <div className="header">
          <h3 className="ui teal header">{user.name}</h3>
        </div>
        <div className="meta">{user.company.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, { detail }) => {
  return { user: detail };
};

export default connect(mapStateToProps)(UserCard);
