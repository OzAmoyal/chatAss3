import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const chatSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }]
  });

module.exports=mongoose.model('Chat', chatSchema)
