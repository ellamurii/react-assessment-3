import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUsers } from '../actions/userActions';
import UserCard from '../components/UserCard';
import Header from '../components/Header';

const Users = (props) => {
  if (!props.users.length) {
    props.fetchUsers();
  }

  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };

  const renderCard = (user) => {
    return (
      <div data-testid="user-card" className="item" key={user.id}>
        <UserCard user={user} navigateTo={navigateTo} />
      </div>
    );
  };

  return (
    <div className="ui relaxed divided list" data-testid="users-container">
      <Header title="Members" />
      {props.users.map(renderCard)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(Users);
