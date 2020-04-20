import React from "react";

const UserCard = ({ user, navigateTo }) => {
  return (
    <div className="content" onClick={() => navigateTo(`/user/${user.id}`)}>
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
};

export default UserCard;
