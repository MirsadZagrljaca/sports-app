import React, { useState, useEffect } from "react";
import { Bracket } from "react-brackets";
import { makeRounds } from "../helpers/roundmaker";

export default function TournamentBracket({
  tournament,
  participants,
  setParticipants,
}) {
  const [rounds, setRounds] = useState([]);

  const doingRounds = async (newRounds) => {
    const title = "Round";
    const seeds = [];
    let counter = 1;

    for (let i = 0; i < participants.length; i++) {
      const tempSeed = {
        id: counter,
        date: tournament.time,
        teams: [{ name: participants[i] }, { name: participants[i + 1] }],
      };
      seeds.push(tempSeed);
      counter++;
      i++;
    }

    const tempRound = {
      title: title,
      seeds: seeds,
    };
    newRounds.push(tempRound);
  };

  useEffect(async () => {
    let tempPart = participants;

    if (participants.length % 2 !== 0) {
      let temp = "Free Win";
      tempPart.push(temp);
      setParticipants(tempPart);
    }

    const newRounds = await makeRounds(
      tournament.numberOfParticipants,
      tempPart,
      tournament
    );

    setRounds(newRounds);
  }, []);

  return (
    <div className="bracket">
      {participants.length < tournament.numberOfParticipants && (
        <h2>
          Wait Untill All {tournament.numberOfParticipants} Teams is Registered
        </h2>
      )}
      {participants.length === tournament.numberOfParticipants && (
        <Bracket rounds={rounds} />
      )}
    </div>
  );
}
