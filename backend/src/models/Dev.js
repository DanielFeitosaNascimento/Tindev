const { Schema, model } = require('mongoose');
const DevSchema = new Schema ({
  name:{
    type: String,
    required: true,
  },
  user:{
    type: String,
    required: true,   
  },
  avatar:{
    type: String,
    required: true,
  },
  bio: String,
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
  deslikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
},
{
  timestamps: true,
}); 
// createdAT, updatedAT
module.exports = model('Dev',DevSchema);