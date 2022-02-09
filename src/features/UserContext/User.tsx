import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "lokesh",
      email: "loks@gmail.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <div>User</div>

      <br />

      <div className="">UserName is {userContext.user?.name}</div>
      <div className="">Email is {userContext.user?.email}</div>
    </>
  );
};

export default User;
