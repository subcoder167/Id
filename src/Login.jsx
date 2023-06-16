import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const creds = [
       { id: "bjpgoa1@admin.com", password: "12345" },
    { id: "karyakarta1@admin.com", password: "12345" },
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

    var flag = 0;

    for (let i = 0; i < creds.length; i++) {
      if (creds[i].id === email && creds[i].password === password) {
        setloggedin(true);
        setuserid("user");
        flag = 1;
      }
    }

    if (flag === 0) {
      alert("invalid user id or password");
    }


    

  };

  useEffect(() => {
    if (loggedin) {
      navigate("/upload");
    }
  }, [loggedin]);

  return (
    <div className="App bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/CKQ62Hm/Whats-App-Image-2023-06-17-at-12-44-30-AM.jpg')] md:bg-[url('https://i.ibb.co/XD5knTj/71-715457-bjp-logo-hd-image-co-1.jpg')]">
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
