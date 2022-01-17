import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import trophy from "../assets/trophy.jpg";
import { signin } from "./api-auth";
import authHelper from "./auth-helper";
import { Navigate } from "react-router";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirect: false,
  });
  const [type, setType] = useState("password");

  const typeHandler = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const clickHandle = () => {
    let user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        authHelper.authenticate(data, () => {
          setValues({ ...values, error: "", redirect: true });
        });
      }
    });
  };

  if (values.redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="login">
        <div className="login-main">
          <div className="login-left">
            <img src={trophy} alt="login-trophy" />
          </div>

          <div className="login-right">
            <div className="login-right-top">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email..."
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type={type}
                  className="form-control"
                  placeholder="password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={typeHandler}
                  >
                    {type === "password" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    )}

                    {type === "text" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              
            </div>

            <div className="login-right-bottom">
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={clickHandle}
                >
                  Login
                </button>
              </div>

              <div>
                <p>If you don't have an account </p>
                <a href="/register">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {values.error && (
          <Alert
            variant="danger"
            style={{
              marginTop: "2rem",
              marginLeft: "30%",
              marginRight: "30%",
              textAlign: "center",
            }}
          >
            {values.error}
          </Alert>
        )}
      </div>
    </div>
  );
}
