'use strict';

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String
});

export default mongoose.model('User', UserSchema);
