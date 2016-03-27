'use strict';
import User from './user.model';

// Gets a list of Things
export function getUser(req, res) {
  User.findOne({username: req.params.username}, function(err, data){
    res.json({err, data});
  });
}

export function login(req, res) {
  User.findOne({username: req.body.username, password: req.body.password}, function(err, data){
    res.json({err, data});
  });
}

export function list(req, res) {
  User.find(function(err, data){
    res.json({err, data});
  });
}

export function create(req, res) {
  var user = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    email: req.body.email
  };

  User.create(user, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  })
}
