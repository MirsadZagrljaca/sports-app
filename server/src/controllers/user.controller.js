import User from "../models/user.model";
import _, { join } from "lodash";
import errorHandler from "../helpers/dbErrorHandler";
import cache from "../../../cache/cache";


const create = (req, res, next) => {
  const user = new User(req.body);

  user.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "Successfully signed up!" });
  });
};

const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(users);
  }).select("_id username email");
};

const userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User not found" });
    }
    req.profile = user;
    next();
  });
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json(req.profile);
};

const update = (req, res, next) => {
  let user = req.profile;
  let data = req.body;

  user = _.extend(user, data);
  user.updated = Date.now();

  cache._id = user._id;
  cache.username = user.username;
  cache.email = user.email;

  user.save((err) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json(user);
  });
};

const remove = (req, res, next) => {
  let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;

    cache._id = "";
    cache.username = "";
    cache.email = "";

    res.json(deletedUser);
  });
};

export default { create, list, userByID, read, update, remove };
