'use strict';
import mongoose from 'mongoose';

var UserScheme = mongoose.Schema({
  username: String,
  password: String,
  role: {type: String, default: "user"},
  email: String
});

export default mongoose.model('User', UserScheme);
