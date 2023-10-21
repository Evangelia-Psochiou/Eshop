const User = require("../models/user.model");

const logger = require("../logger/logger");

exports.findAll = function (req, res) {
  console.log("Find all users");

<<<<<<< HEAD
  User.find((err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in reading users: ${err}`);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in reading all users");
      logger.info("Success in reading all users");
      logger.warn("Success in reading all users");
      logger.error("Success in reading all users");
      //logger.log("debug", "Success in reading all users");
      logger.debug("Success in reading all users");
=======
  User.find({}, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      logger.error("Error in reading all users", err);
      console.log("Problem in reading users", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in reading users");
      logger.info("Success in reading all users");
      logger.warn("Warn in reading all users");
      logger.error("Error in reading all users");
      logger.debug("Debug in reading all users");
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    }
  });
};

exports.findOne = function (req, res) {
  const username = req.params.username;

  console.log("Find user with username", username);

<<<<<<< HEAD
  User.findOne({ username: username }, (err, result) => {
    if (err) {
      res.json({ status: false, data: err });
      errorLog.info(`Problem in finding user: ${username}`);
    } else {
      res.json({ status: true, data: result });
      successlog.info(`Success in finding user: ${username}`);
=======
  User.findOne({ username: username }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in finding user with username ${username}`, err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in finding user", username);
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    }
  });
};

exports.create = function (req, res) {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    products: req.body.products,
  });

<<<<<<< HEAD
  console.log("insert user with username:", req.body.username);
=======
  console.log("Insert user with username", req.body.username);
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00

  newUser.save((err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in creating user`, err);
    } else {
      res.status(200).json({ status: true, data: result });
<<<<<<< HEAD
      console.log("Success in creating user");
=======
      console.log("Success in creating user", username);
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    }
  });
};

exports.update = function (req, res) {
  const username = req.body.username;

<<<<<<< HEAD
  console.log("Update user with username:", username);

  const updatedUser = {
=======
  const updateUser = {
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
<<<<<<< HEAD
    products: req.body.products,
  };

  User.findOneAndUpdate(
    { username: username },
    updatedUser,
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).json({ status: false, data: err });
        console.log(`Problem in updating user`, err);
      } else {
        res.status(200).json({ status: true, data: result });
        console.log("Success in updating user");
      }
    }
  );
=======
  };

  User.findOneAndUpdate({ username: username }, updateUser, (err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in updating user`, err);
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in updating user");
    }
  });
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
};

exports.delete = function (req, res) {
  const username = req.params.username;

<<<<<<< HEAD
  console.log("Delete user with username", username);

  User.findOneAndRemove({ username: username }, (err, result) => {
=======
  console.log("Delete user", username);

  User.findOneAndDelete({ username: username }, (err, result) => {
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in deleting user`, err);
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in deleting user");
    }
  });
};
