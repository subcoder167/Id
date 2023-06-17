import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const creds = [
      { id: "bjpgoa1@admin.com", password: "12345" },
      { id: "karyakarta1@admin.com", password: "12345" },
      { id: "bjpgoa2@admin.com", password: "12345" },
      { id: "karyakarta2@admin.com", password: "12345" },
      { id: "bjpgoa3@admin.com", password: "12345" },
      { id: "karyakarta3@admin.com", password: "12345" },
      { id: "bjpgoa4@admin.com", password: "12345" },
      { id: "karyakarta4@admin.com", password: "12345" },
      { id: "bjpgoa5@admin.com", password: "12345" },
      { id: "karyakarta5@admin.com", password: "12345" },
      { id: "bjpgoa6@admin.com", password: "12345" },
      { id: "karyakarta6@admin.com", password: "12345" },
      { id: "bjpgoa7@admin.com", password: "12345" },
      { id: "karyakarta7@admin.com", password: "12345" },
      { id: "bjpgoa8@admin.com", password: "12345" },
      { id: "karyakarta8@admin.com", password: "12345" },
      { id: "bjpgoa9@admin.com", password: "12345" },
      { id: "karyakarta9@admin.com", password: "12345" },
      { id: "bjpgoa10@admin.com", password: "12345" },
      { id: "karyakarta10@admin.com", password: "12345" },
      { id: "bjpgoa11@admin.com", password: "12345" },
      { id: "karyakarta11@admin.com", password: "12345" },
      { id: "bjpgoa12@admin.com", password: "12345" },
      { id: "karyakarta12@admin.com", password: "12345" },
      { id: "bjpgoa13@admin.com", password: "12345" },
      { id: "karyakarta13@admin.com", password: "12345" },
      { id: "bjpgoa14@admin.com", password: "12345" },
      { id: "karyakarta14@admin.com", password: "12345" },
      { id: "bjpgoa15@admin.com", password: "12345" },
      { id: "karyakarta15@admin.com", password: "12345" },
      { id: "bjpgoa16@admin.com", password: "12345" },
      { id: "karyakarta16@admin.com", password: "12345" },
      { id: "bjpgoa17@admin.com", password: "12345" },
      { id: "karyakarta17@admin.com", password: "12345" },
      { id: "bjpgoa18@admin.com", password: "12345" },
      { id: "karyakarta18@admin.com", password: "12345" },
      { id: "bjpgoa19@admin.com", password: "12345" },
      { id: "karyakarta19@admin.com", password: "12345" },
      { id: "bjpgoa20@admin.com", password: "12345" },
      { id: "karyakarta20@admin.com", password: "12345" 
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
