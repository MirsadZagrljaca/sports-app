import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import base from "../../config";

export default function Settings({ tournament, setTournament, participants }) {
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
  const [disabled, setDisabled] = useState(false);

  useEffect(async () => {
    let response = await axios.get(`${base}/cache`);
    setUser(response.data);

    const dateTime = tournament.time.split("T");
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
      return setDisabled(true);
    }

    if (yearCheck === 0 && monthCheck < 0) {
      return setDisabled(true);
    }

    if (yearCheck === 0 && monthCheck === 0 && dayCheck < 0) {
      return setDisabled(true);
    }

    if (
      yearCheck === 0 &&
      monthCheck === 0 &&
      dayCheck === 0 &&
      hoursCheck < 0
    ) {
      return setDisabled(true);
    }

    if (
      yearCheck === 0 &&
      monthCheck === 0 &&
      dayCheck === 0 &&
      hoursCheck === 0 &&
      minutesCheck < 0
    ) {
      return setDisabled(true);
    }
  }, []);

  const update = () => {
    if (values.time !== "") {
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
    }

    if (
      (values.numberOfParticipants !== 0 && values.numberOfParticipants < 0) ||
      values.numberOfParticipants > 64
    ) {
      return setValues({
        ...values,
        error: "Number of participants should be between 16 and 42",
      });
    }

    setValues({ ...values, error: "" });

    let newtournament = {
      name: values.name || tournament.name,
      game: values.game || tournament.game,
      numberOfParticipants:
        values.numberOfParticipants || tournament.numberOfParticipants,
      description: values.description || tournament.description,
      time: values.time || tournament.time,
    };

    axios
      .put(`${base}/tournament/${tournament._id}`, newtournament)
      .then((response) => {
        if (response.data.error) {
          setValues({ ...values, error: response.data.error });
        } else {
          setTournament(response.data);
        }
      });
  };

  const remove = () => {
    axios.delete(`${base}/tournament/${tournament._id}`).then((response) => {
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
    <div className="add">
      <div>
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
              defaultValue={tournament.name}
            />
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
              defaultValue={tournament.description}
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
              defaultValue={tournament.game}
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
              defaultValue={tournament.numberOfParticipants}
              disabled={disabled}
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
              defaultValue={tournament.time}
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
              onClick={update}
            >
              Save Changes
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger btn-lg btn-block"
              onClick={remove}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
