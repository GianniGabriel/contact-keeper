import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

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
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else if (error) {
      setAlert(error, "danger");
      clearErrors();
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
      <div style={{ padding: "10px", border: "#333 3px solid" }}>
        {/* <br /> */}
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

export default Register;
