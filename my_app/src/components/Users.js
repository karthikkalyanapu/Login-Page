import React, { useState } from "react";
import Changepassword from "./changePassword";
import { Link, Redirect } from "react-router-dom";

const Users = (props) => {
  const [email, setEmail] = useState("karthik.kalyanapu");
  const [password, setPassword] = useState("************");

  const [allEntry, setNewEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const name = "hello";
    // console.log(name);
    return name;
  };

  return (
    <div style={{ margin: "70px", textAlign: "center" }}>
      <form action="" onSubmit={submitForm}>
        <div>
          <label
            htmlFor="email"
            style={{ padding: "10px", "font-size": "20px" }}
          >
            Username:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            style={{ border: "none", "font-size": "20px" }}
            value={email}
            required
            //  onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label
            htmlFor="password"
            style={{
              padding: "10px",
              "font-size": "20px",
              paddingLeft: "23px"
            }}
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{ border: "none", "font-size": "20px" }}
            value={password}
            required
            //onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ textAlign: "center", marginRight: "70px" }}>
          <Link to="/changepassword">
            <button
              style={{ margin: "10px", padding: "3px", fontWeight: "600" }}
            >
              change Password
            </button>
          </Link>
          <Link to="/form">
            <button
              type="submit"
              style={{
                margin: "10px",
                padding: "3px",
                fontWeight: "600",
                width: "20%"
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Users;
