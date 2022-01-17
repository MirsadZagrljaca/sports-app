import React, { useState, useEffect } from "react";
import base from "../../config";
import axios from "axios";
import Header from "../core/Header";
import authHelper from "./auth-helper";
import { update } from "./api-user";
import { Alert } from "react-bootstrap";

export default function Edit() {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    error: "",
    redirect: false,
  });
  const jwt = authHelper.isAuthenticated();

  useEffect(() => {
    axios.get(`${base}/cache`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const clickHandle = () => {
    const newUser = {
      username: values.username || user.username,
      email: values.email || user.email,
    };

    update({ userId: user._id }, { t: jwt }, newUser).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", redirect: true });
      }
    });
  };

  if (values.redirect) {
    return window.location.assign("/home");
  }

  return (
    <div>
      <Header />

      <div className="profile">
        <div>
          <h2>Edit Profile</h2>

          <div className="profile-main">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username..."
                defaultValue={user.username}
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username..."
                defaultValue={user.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="profile-buttons">
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={clickHandle}
              >
                Submit
              </button>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
                onClick={() => window.location.assign("/profile")}
              >
                Back
              </button>
            </div>
          </div>
        </div>

        <div>
          {values.error && <Alert variant="danger">{values.error}</Alert>}
        </div>
      </div>
    </div>
  );
}
