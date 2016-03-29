'use strict';
import mongoose from 'mongoose';

var PostScheme = mongoose.Schema({
    urlName : String,
  content: String,
  title: String,
  author: {type: String, default: "admin"},
  date: {type: Date, default: Date.now},
  category: String
});

var CategoryScheme = mongoose.Schema({
  name : String,
  urlName: String
});


export default mongoose.model('Post', PostScheme);
//export default mongoose.model('Category', CategoryScheme);
