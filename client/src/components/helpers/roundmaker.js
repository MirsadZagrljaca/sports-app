const makeRounds = async (number, participants, tournament) => {
  let newRounds = [];
  let newParticipants = participants;
  const title = "Round 1";
  const seeds = [];
  let counter = 1;

  for (let i = 0; i < newParticipants.length; i++) {
    const tempSeed = {
      id: counter,
      date: tournament.time,
      teams: [{ name: newParticipants[i] }, { name: newParticipants[i + 1] }],
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

  const title2 = "Round 2";
  const seeds2 = [];
  let c = 1;

  for (let i = 0; i < 4; i++) {
    const tempSeed = {
      id: c,
      date: tournament.time,
      teams: [
        { name: "Winner of Previous Round" },
        { name: "Winner of Previous Round" },
      ],
    };
    seeds2.push(tempSeed);
    c++;
  }

  const tempRound2 = {
    title: title2,
    seeds: seeds2,
  };
  newRounds.push(tempRound2);

  const title3 = "Round 3";
  const seeds3 = [];
  let c3 = 1;

  for (let i = 0; i < 2; i++) {
    const tempSeed = {
      id: c3,
      date: tournament.time,
      teams: [
        { name: "Winner of Previous Round" },
        { name: "Winner of Previous Round" },
      ],
    };
    seeds3.push(tempSeed);
    c3++;
  }

  const tempRound3 = {
    title: title3,
    seeds: seeds3,
  };
  newRounds.push(tempRound3);

  const title4 = "Finals";
  const seeds4 = [];
  let c4 = 1;

  for (let i = 0; i < 1; i++) {
    const tempSeed = {
      id: c4,
      date: tournament.time,
      teams: [
        { name: "Winner of Previous Round" },
        { name: "Winner of Previous Round" },
      ],
    };
    seeds4.push(tempSeed);
    c4++;
  }

  const tempRound4 = {
    title: title4,
    seeds: seeds4,
  };
  newRounds.push(tempRound4);

  return newRounds;
};

export { makeRounds };
