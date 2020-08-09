import React, { useState, useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    } else {
      login(user);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
      <div style={{ padding: "10px", border: "#333 3px solid" }}>
        <h3>
          You can register with a fake email and password or login with one of
          my dummy accounts below
        </h3>
        <br />
        <p>
          {" "}
          <span className="text-primary" style={{ fontWeight: "bold" }}>
            Email:
          </span>{" "}
          jonsnow@winterfell.com
        </p>
        <p>
          <span className="text-primary" style={{ fontWeight: "bold" }}>
            Password:
          </span>{" "}
          1234567
        </p>
        <br />
        <p>
          {" "}
          <span style={{ color: "#DD261A", fontWeight: "bold" }}>
            Email:
          </span>{" "}
          dabernathy@sweetwater.com
        </p>
        <p>
          <span style={{ color: "#DD261A", fontWeight: "bold" }}>
            Password:
          </span>{" "}
          123456
        </p>
      </div>
    </div>
  );
};

export default Login;
