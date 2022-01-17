import React, { useState, useEffect } from "react";
import base from "../../config";
import axios from "axios";
import Header from "../core/Header";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${base}/cache`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="profile">
        <div>
          <h2>My Profile</h2>

          <div className="profile-main">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username..."
                defaultValue={user.username}
                disabled
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username..."
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>

          <div className="profile-buttons">
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => window.location.assign("/profile/edit")}
              >
                Edit Profile
              </button>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
                onClick={() => window.location.assign("/profile/password")}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
