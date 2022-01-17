import React, { useState, useEffect } from "react";
import base from "../../config";
import trophy from "../assets/trophy.jpg";
import axios from "axios";
import authHelper from "../user/auth-helper";

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${base}/cache`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <img src={trophy} alt="login-trophy" />
        <h4>Tournaments</h4>
      </div>

      <div className="header-right">
        <div className="dropdown show">
          <a
            className="btn btn-secondary dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>{" "}
            {user.username}
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/home">
              My Tournaments
            </a>
            <a className="dropdown-item" href="/profile">
              Profile
            </a>
            <a
              className="dropdown-item"
              onClick={() =>
                authHelper.clearToken(() => window.location.assign("/"))
              }
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
