import axios from "axios";
import React, { useState, useEffect } from "react";
import base from "../../config";
import Header from "./Header";
import { Button } from "react-bootstrap";
import image from "../assets/image.jpeg";

export default function Home() {
  const [user, setUser] = useState({});
  const [tournaments, setTournaments] = useState([]);

  useEffect(async () => {
    let response = await axios.get(`${base}/cache`);
    setUser(response.data);

    axios.get(`${base}/api/tournament/${response.data._id}`).then((res) => {
      if (res.data.err) {
        return console.log(res.data.err);
      }
      setTournaments(res.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="home">
        <div>
          <div className="home-header">
            <div className="home-header-left">
              <p>Your Tournaments</p>
            </div>

            <div className="home-header-right">
              <Button
                variant="outline-dark"
                onClick={() => window.location.assign("/newtournament")}
              >
                Create a Tournament
              </Button>
            </div>
          </div>

          <div className="home-main">
            <div>
              {tournaments.length === 0 && <h2>Add Your First Tournament!</h2>}

              <div className="home-main-mapping">
                {tournaments &&
                  tournaments.map((v, i) => {
                    return (
                      <div
                        className="single"
                        key={i}
                        onClick={() => {
                          window.location.assign(`/tournaments/${v.uniqueId}`);
                        }}
                      >
                        <div className="single-left">
                          <img src={image} alt="single" />
                          <div>
                            <h4>{v.name}</h4>
                            <h6>{v.game}</h6>
                          </div>
                        </div>

                        <div className="single-right">
                          <p>
                            {v.numberOfParticipants}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-person-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                          </p>

                          <p>{v.time}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
