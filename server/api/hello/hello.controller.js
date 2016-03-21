/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
export function hello(req, res) {
  res.json({message:"Hello I'm Cuong"});
}

export function country(req, res) {
  res.json(["Vietnam", "Singapore", "China"]);
}

export function login(req, res) {
  if (req.body.username === "admin" && req.body.password === "123") {
    res.json({message: "success"});
  } else {
    res.json({message: "failure"});
  }
}
