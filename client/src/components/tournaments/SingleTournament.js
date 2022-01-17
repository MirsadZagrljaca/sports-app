import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import base from "../../config";
import Header from "../core/Header";
import Participants from "./Participants";
import Settings from "./Settings";
import TournamentBracket from "./TournamentBracket";

export default function SingleTournament() {
  const [user, setUser] = useState({});
  const [tournament, setTournament] = useState({});
  const [participants, setParticipants] = useState([]);
  const { uniqueId } = useParams();
  const [menu, setMenu] = useState("participants");

  useEffect(async () => {
    axios.get(`${base}/cache`).then((res) => {
      setUser(res.data);
    });

    let response = await axios.get(`${base}/tournamentByUniqueId/${uniqueId}`);
    if (response.data.error) {
      console.log(response.data.error);
    } else {
      setParticipants(response.data[0].participants);
      setTournament(response.data[0]);
    }
  }, []);

  return (
    <div>
      <Header />

      <div className="tournament">
        <div className="tournament-header">
          <h2>{tournament.name}</h2>
          <div className="tournament-header-info">
            <p>
              {tournament.numberOfParticipants}{" "}
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

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-controller"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
              </svg>{" "}
              {tournament.game}
            </p>

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>{" "}
              {tournament.time}
            </p>
          </div>
        </div>

        <div className="tournament-menu">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ backgroundColor: "none" }}
          >
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => setMenu("bracket")}
                  >
                    Bracket
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => setMenu("participants")}
                  >
                    Participants
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => setMenu("settings")}
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {menu === "bracket" && (
          <TournamentBracket
            tournament={tournament}
            participants={participants}
            setParticipants={setParticipants}
          />
        )}

        {menu === "participants" && (
          <Participants
            tournament={tournament}
            setTournament={setTournament}
            participants={participants}
            setParticipants={setParticipants}
          />
        )}

        {menu === "settings" && (
          <Settings
            tournament={tournament}
            setTournament={setTournament}
            participants={participants}
          />
        )}
      </div>
    </div>
  );
}
