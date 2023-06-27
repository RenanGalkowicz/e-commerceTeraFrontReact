/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
import Loading from "../atoms/Loading";
import Default from "../templates/Default";
import UserListWrapper from "../molecules/UserListWrapper";

export default function Users() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  console.log(users);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
