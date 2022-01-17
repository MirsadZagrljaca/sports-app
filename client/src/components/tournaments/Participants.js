import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import base from "../../config";

export default function Participants({
  tournament,
  participants,
  setParticipants,
  setTournament,
}) {
  const [value, setValue] = useState({});

  const add = () => {
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
        setTournament(resp.data);
      }
    });
  };

  return (
    <div className="participants">
      <div>
        <table>
          <tbody>
            {participants.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{v}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

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
      </div>
    </div>
  );
}
