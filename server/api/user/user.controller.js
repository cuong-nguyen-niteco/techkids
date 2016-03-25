'use strict';
import User from './user.model'
export function create(req, res) {
  return User.create(req.body)
    .then(function(user){
      res.status(200).json(user);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
}
