import _, { join } from "lodash";
import errorHandler from "../helpers/dbErrorHandler";
import tournamentModel from "../models/tournament.model";

const create = (req, res, next) => {
  const tournament = new tournamentModel(req.body);

  tournament.save((err, result) => {
    if (err) {
      return res.json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "Successfully created Tournament!" });
  });
};

const list = (req, res) => {
  tournamentModel
    .find((err, tournaments) => {
      if (err) {
        return res.json({
          error: errorHandler.getErrorMessage(err),
        });
      }
      res.json(tournaments);
    })
    .populate("host");
};

const tournamentById = (req, res, next, id) => {
  tournamentModel
    .findById(id)
    .populate("host")
    .exec((err, tournament) => {
      if (err || !tournament) {
        return res.json({ error: "Tournament not found" });
      }
      req.profile = tournament;
      next();
    });
};

const read = (req, res) => {
  res.status(200).json(req.profile);
};

const update = (req, res, next) => {
  let tournament = req.profile;
  let data = req.body;

  tournament = _.extend(tournament, data);

  tournament.save((err) => {
    if (err) {
      return res.json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json(tournament);
  });
};

const remove = (req, res, next) => {
  let tournament = req.profile;
  tournament.remove((err, deletedTournament) => {
    if (err) {
      return res.json({ error: errorHandler.getErrorMessage(err) });
    }

    res.json(deletedTournament);
  });
};

const tournamentByUniqueId = (req, res, next, id) => {
  tournamentModel
    .find({ uniqueId: id })
    .populate("host")
    .exec((err, tournament) => {
      if (err || !tournament) {
        return res.json({ error: "Tournament not found" });
      }
      req.profile = tournament;
      next();
    });
};

const getTournamentByUniqueId = (req, res) => {
  res.json(req.profile);
};

const getTournamentsByUser = (req, res, next, userId) => {
  tournamentModel
    .find({ host: userId })
    .populate("host")
    .exec((err, tournament) => {
      if (err || !tournament) {
        return res.json({ error: "Tournament not found" });
      }
      req.profile = tournament;
      next();
    });
};

const tournamentsByHost = (req, res) => {
  res.json(req.profile);
};

export default {
  create,
  list,
  tournamentById,
  read,
  update,
  remove,
  tournamentByUniqueId,
  getTournamentByUniqueId,
  getTournamentsByUser,
  tournamentsByHost,
};
