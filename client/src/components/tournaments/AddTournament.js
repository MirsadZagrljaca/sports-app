import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import base from "../../config";
import Header from "../core/Header";

export default function AddTournament() {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({
    name: "",
    uniqueId: "",
    description: "",
    game: "",
    numberOfParticipants: 0,
    time: "",
    error: "",
    redirect: false,
  });

  useEffect(async () => {
    if (!sessionStorage.getItem("token")) {
      return window.location.assign("/");
    }

    let response = await axios.get(`${base}/cache`);
    setUser(response.data);
  }, []);

  const generate = () => {
    const number = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const string = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "Y",
      "Z",
    ];
    const n2 = Math.floor(Math.random() * 47);
    const n = Math.floor(Math.random() * 47);
    const n3 = Math.floor(Math.random() * 47);
    const tempUnique = `${number}${number2}${string[n]}${string[n2]}${string[n3]}`;
    setValues({ ...values, uniqueId: tempUnique });
  };

  const submitHandler = () => {
    const dateTime = values.time.split("T");
    const date = dateTime[0].split("-");
    const time = dateTime[1].split(":");

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const yearCheck = date[0] - year;
    const monthCheck = date[1] - month;
    const dayCheck = date[2] - day;
    const hoursCheck = time[0] - hours;
    const minutesCheck = time[1] - minutes;

    if (yearCheck < 0) {
      return setValues({ ...values, error: "That Date Has Already Passed" });
    }

    if (yearCheck === 0 && monthCheck < 0) {
      return setValues({ ...values, error: "That Date Has Already Passed" });
    }

    if (yearCheck === 0 && monthCheck === 0 && dayCheck < 0) {
      return setValues({ ...values, error: "That Date Has Already Passed" });
    }

    if (
      yearCheck === 0 &&
      monthCheck === 0 &&
      dayCheck === 0 &&
      hoursCheck < 0
    ) {
      return setValues({ ...values, error: "That Date Has Already Passed" });
    }

    if (
      yearCheck === 0 &&
      monthCheck === 0 &&
      dayCheck === 0 &&
      hoursCheck === 0 &&
      minutesCheck < 0
    ) {
      return setValues({ ...values, error: "That Date Has Already Passed" });
    }

    if (
      values.game === "" ||
      values.name === "" ||
      values.numberOfParticipants === 0 ||
      values.description === "" ||
      values.time === "" ||
      values.uniqueId === ""
    ) {
      return setValues({ ...values, error: "Please Fill All Input Fields!" });
    }

    if (values.numberOfParticipants < 16 || values.numberOfParticipants > 42) {
      return setValues({
        ...values,
        error: "Number of participants should be between 16 and 42",
      });
    }

    let newtournament = {
      name: values.name,
      game: values.game,
      numberOfParticipants: values.numberOfParticipants,
      description: values.description,
      time: values.time,
      uniqueId: values.uniqueId,
      host: user._id,
    };

    axios.post(`${base}/tournament/create`, newtournament).then((response) => {
      if (response.data.error) {
        setValues({ ...values, error: response.data.error });
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

      <div className="add">
        <div>
          <div className="add-header">
            <h2>Add New Tournament</h2>
          </div>

          <div className="add-form">
            <div className="form-group">
              <div>
                <label htmlFor="exampleInputEmail1">Host</label>
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={user.username}
                disabled
              />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="exampleInputEmail1">Tournament Name</label>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>

            <div className="input-group mb-3">
              <div>
                <label htmlFor="basic-url">URL</label>
              </div>
              <div
                className="input-group-prepend"
                style={{ width: "fit-content" }}
              >
                <span className="input-group-text" id="basic-addon3">
                  http://localhost:3000/tournament/
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                onChange={(e) =>
                  setValues({ ...values, uniqueId: e.target.value })
                }
                value={values.uniqueId}
              />

              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={generate}
              >
                Generate
              </button>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="exampleInputEmail1">Description</label>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </div>

            <div className="input-group mb-3">
              <div>
                <label htmlFor="exampleInputEmail1">Game</label>
              </div>
              <input
                type="search"
                list="game"
                className="form-control"
                onChange={(e) => setValues({ ...values, game: e.target.value })}
              />

              <datalist id="game">
                <option value="Football" />
                <option value="Basketball" />
                <option value="Volleyball" />
                <option value="Handball" />
              </datalist>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="exampleInputEmail1">Participants</label>
              </div>
              <input
                type="number"
                className="form-control"
                min={16}
                max={42}
                onChange={(e) =>
                  setValues({ ...values, numberOfParticipants: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="exampleInputEmail1">Time</label>
              </div>
              <input
                type="datetime-local"
                className="form-control"
                onChange={(e) => setValues({ ...values, time: e.target.value })}
              />
            </div>
          </div>

          <div className="add-buttons">
            <div>
              {values.error && <Alert variant="danger">{values.error}</Alert>}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
                onClick={() => window.location.assign("/home")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
