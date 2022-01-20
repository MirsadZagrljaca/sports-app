import React, { useState, useEffect } from "react";
import { Bracket } from "react-brackets";
import { makeRounds } from "../helpers/roundmaker";

export default function TournamentBracket({
  tournament,
  participants,
  setParticipants,
}) {
  const [rounds, setRounds] = useState([]);
  const [pre, setPre] = useState([]);
  const [firstRound, setFirstRound] = useState([]);
  const [secondRound, setSecondRound] = useState([]);
  const [thirdRound, setThirdRound] = useState([]);
  const [fourthRound, setFourthRound] = useState([]);
  const [fifthRound, setFifthRound] = useState([]);
  const [sixthRound, setSixthRound] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(async () => {
    if (participants.length < tournament.numberOfParticipants) {
      return;
    }

    let tempPart = participants;

    if (tempPart.length === 2) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempOne = [" "];

      setSecondRound(tempOne);
    }

    if (tempPart.length === 3) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 2; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempOne = [" "];

      setThirdRound(tempOne);
    }

    if (tempPart.length === 4) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 2; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempOne = [" "];

      setThirdRound(tempOne);
    }

    if (tempPart.length > 4 && tempPart.length < 8) {
      let numberOfRest = tempPart.length - 4;
      let tempPre = [];
      if (numberOfRest % 2 !== 0) {
        numberOfRest++;
        tempPart.push(" ");
      } else {
        numberOfRest++;
        tempPart.push(" ");
        numberOfRest++;
        tempPart.push(" ");
      }
      for (let i = 0; i < numberOfRest; i++) {
        tempPre.push(tempPart[i]);
      }

      let tempSixteen = [];

      for (let i = numberOfRest; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }

      setPre(tempPre);

      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 2; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempOne = [" "];

      setThirdRound(tempOne);
    }

    if (tempPart.length === 8) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 4; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 2; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempOne = [" "];

      setFourthRound(tempOne);
    }

    if (tempPart.length > 8 && tempPart.length < 16) {
      let numberOfRest = tempPart.length - 8;
      let tempPre = [];
      if (numberOfRest % 2 !== 0) {
        numberOfRest++;
        tempPart.push(" ");
      } else {
        numberOfRest++;
        tempPart.push(" ");
        numberOfRest++;
        tempPart.push(" ");
      }
      for (let i = 0; i < numberOfRest; i++) {
        tempPre.push(tempPart[i]);
      }

      let tempSixteen = [];

      for (let i = numberOfRest; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }

      setPre(tempPre);
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 4; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 2; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempOne = [" "];
      setFourthRound(tempOne);
    }

    if (tempPart.length === 16) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 8; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 4; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempTwo = [];

      for (let i = 0; i < 2; i++) {
        tempTwo.push(" ");
      }

      setFourthRound(tempTwo);

      let tempOne = [" "];
      setFifthRound(tempOne);
    }

    if (tempPart.length > 16 && tempPart.length < 32) {
      let numberOfRest = tempPart.length - 16;
      let tempPre = [];
      if (numberOfRest % 2 !== 0) {
        numberOfRest++;
        tempPart.push(" ");
      } else {
        numberOfRest++;
        tempPart.push(" ");
        numberOfRest++;
        tempPart.push(" ");
      }
      for (let i = 0; i < numberOfRest; i++) {
        tempPre.push(tempPart[i]);
      }

      let tempSixteen = [];

      for (let i = numberOfRest; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }

      setPre(tempPre);
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 8; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 4; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempTwo = [];

      for (let i = 0; i < 2; i++) {
        tempTwo.push(" ");
      }

      setFourthRound(tempTwo);

      let tempOne = [" "];
      setFifthRound(tempOne);
    }

    if (tempPart.length === 32) {
      let tempSixteen = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 16; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 8; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempTwo = [];

      for (let i = 0; i < 4; i++) {
        tempTwo.push(" ");
      }

      setFourthRound(tempTwo);

      let tempOne = [];

      for (let i = 0; i < 2; i++) {
        tempOne.push(" ");
      }
      setFifthRound(tempOne);

      let temp = [" "];
      setSixthRound(temp);
    }

    if (tempPart.length > 32 && tempPart.length < 64) {
      let numberOfRest = tempPart.length - 32;
      let tempPre = [];
      if (numberOfRest % 2 !== 0) {
        numberOfRest++;
        tempPart.push(" ");
      } else {
        numberOfRest++;
        tempPart.push(" ");
        numberOfRest++;
        tempPart.push(" ");
      }
      for (let i = 0; i < numberOfRest; i++) {
        tempPre.push(tempPart[i]);
      }

      let tempSixteen = [];

      for (let i = numberOfRest; i < tempPart.length; i++) {
        tempSixteen.push(tempPart[i]);
      }

      setPre(tempPre);
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 16; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 8; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempTwo = [];

      for (let i = 0; i < 4; i++) {
        tempTwo.push(" ");
      }

      setFourthRound(tempTwo);

      let tempOne = [];

      for (let i = 0; i < 2; i++) {
        tempOne.push(" ");
      }

      setFifthRound(tempOne);

      let temp = [" "];
      setSixthRound(tempOne);
    }

    if (tempPart.length === 64) {
      let tempPre = [];

      for (let i = 0; i < tempPart.length; i++) {
        tempPre.push(tempPart[i]);
      }

      let tempSixteen = [];

      for (let i = 0; i < 32; i++) {
        tempSixteen.push(" ");
      }

      setPre(tempPre);
      setFirstRound(tempSixteen);

      let tempEight = [];
      for (let i = 0; i < 16; i++) {
        tempEight.push(" ");
      }

      setSecondRound(tempEight);

      let tempFour = [];

      for (let i = 0; i < 8; i++) {
        tempFour.push(" ");
      }

      setThirdRound(tempFour);

      let tempTwo = [];

      for (let i = 0; i < 4; i++) {
        tempTwo.push(" ");
      }

      setFourthRound(tempTwo);

      let tempOne = [];

      for (let i = 0; i < 2; i++) {
        tempOne.push(" ");
      }

      setFifthRound(tempOne);

      let temp = [" "];
      setSixthRound(temp);
    }
  }, []);

  const preClickHandler = (value, index) => {
    let first = firstRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setFirstRound(first);
    setRender(!render);
  };

  const firstRoundClick = (value) => {
    let first = secondRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setSecondRound(first);
    setRender(!render);
  };

  const secondRoundClick = (value) => {
    let first = thirdRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setThirdRound(first);
    setRender(!render);
  };

  const thirdRoundClick = (value) => {
    let first = fourthRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setFourthRound(first);
    setRender(!render);
  };

  const fourthRoundClick = (value) => {
    let first = fifthRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setFifthRound(first);
    setRender(!render);
  };

  const fifthRoundClick = (value) => {
    let first = sixthRound;

    for (let i = 0; i < first.length; i++) {
      if (first[i] === value) {
        break;
      } else if (first[i] === " ") {
        first[i] = value;
        break;
      }
    }

    setFifthRound(first);
    setRender(!render);
  };

  return (
    <div className="bracket">
      {participants.length < tournament.numberOfParticipants && (
        <h2>
          Wait Untill All {tournament.numberOfParticipants} Teams is Registered
        </h2>
      )}

      {participants.length === 2 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => secondRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 3 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRound(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => thirdRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 4 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => thirdRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length > 4 && participants.length < 8 && (
        <div className="tournament-bracket">
          <div className="bracket-pre">
            {pre.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => preClickHandler(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => thirdRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 8 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => fourthRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length > 8 && participants.length < 16 && (
        <div className="tournament-bracket">
          <div className="bracket-pre">
            {pre.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => preClickHandler(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div
                  key={i}
                  className={"bracket-single_" + i}
                  onClick={() => fourthRoundClick(v)}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 16 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fifthRound.map((v, i) => {
              return (
                <div key={i} className={"bracket-single_" + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length > 16 && participants.length < 32 && (
        <div className="tournament-bracket">
          <div className="bracket-pre">
            {pre.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => preClickHandler(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fifthRound.map((v, i) => {
              return (
                <div key={i} className={"bracket-single_" + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 32 && (
        <div className="tournament-bracket">
          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fifthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fifthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {sixthRound.map((v, i) => {
              return (
                <div key={i} className={"bracket-single_" + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length > 32 && participants.length < 64 && (
        <div className="tournament-bracket">
          <div className="bracket-pre">
            {pre.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => preClickHandler(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fifthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fifthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {sixthRound.map((v, i) => {
              return (
                <div key={i} className={"bracket-single_" + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {participants.length === 64 && (
        <div className="tournament-bracket">
          <div className="bracket-pre">
            {pre.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => preClickHandler(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {firstRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => firstRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {secondRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => secondRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {thirdRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => thirdRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fourthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fourthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {fifthRound.map((v, i) => {
              return (
                <div key={i}>
                  <div
                    className={"bracket-single_" + i}
                    onClick={() => fifthRoundClick(v, i)}
                  >
                    {v}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className={"bi bi-arrow-right" + "_" + i}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <div>
            {sixthRound.map((v, i) => {
              return (
                <div key={i} className={"bracket-single_" + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
