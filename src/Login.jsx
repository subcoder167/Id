import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const creds = [
    { id: "subhajit123@gmail.com", password: "subhajit123" },
    { id: "subhajit456@gmail.com", password: "subhajit456" },
  ];

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loggedin, setloggedin] = useState(false);
  const [userid, setuserid] = useState("");

  const login = () => {
    // axios
    //   .post("https://example.com", { email, password })
    //   .then((res) => {
    //     setloggedin(true);
    //     setuserid(res?.data?.userid);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });

    for (let i = 0; i < creds.length; i++) {
      if (creds[i].id == email && creds[i].password == password) {
        setloggedin(true);
        setuserid("user");
      }
    }

    if (!loggedin) {
      alert("invalid user id or password");
    }


    

  };

  useEffect(() => {
    if (loggedin) {
      navigate("/upload");
    }
  }, [loggedin, navigate]);

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={login}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              {/* Forgot <a href="#">password?</a> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
