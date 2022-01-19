import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import base from "../../config";

export default function Participants({
  tournament,
  participants,
  setParticipants,
  setTournament,
  host
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [render, setRender] = useState(false);

  useEffect(async () => {
    let response = await axios.get(`${base}/cache`);
    setUser(response.data);
  }, []);

  const add = () => {
    if (value === "") {
      return setError("Please fill Input!");
    }

    let counter = 0;

    participants.map((v, i) => {
      if (v === value) {
        counter++;
      }
    });

    if (counter > 0) {
      return setError("You've Added That Team Already!");
    }

    setError("");

    let newParticipants = participants;
    newParticipants.push(value);
    setParticipants(newParticipants);

    let body = {
      participants: newParticipants,
    };

    axios.put(`${base}/tournament/${tournament._id}`, body).then((resp) => {
      if (resp.data.error) {
        console.log(resp.data.error);
      } else {
        setError("");
        setTournament(resp.data);
        let input = document.getElementsByClassName("form-control");
        input[0].value = "";
      }
    });
  };

  return (
    <div className="participants">
      <div>
        {participants.length === 0 && <h2>No Participants Added Yet!</h2>}

        {participants && (
          <table>
            <tbody>
              {participants.map((v, i) => {
                return (
                  <tr key={i}>
                    {v !== " " && <td>{i + 1}.</td>}
                    {v !== " " && <td>{v}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {host === user._id && (
          <div className="participants-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Team Name..."
                className="form-control"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <Button
              variant="primary"
              onClick={add}
              disabled={participants.length === tournament.numberOfParticipants}
            >
              Add
            </Button>
          </div>
        )}
        <div style={{ marginTop: "2rem" }}>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </div>
  );
}
