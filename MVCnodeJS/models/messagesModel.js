import mongoose from 'mongoose';
import userSchema from './users'
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      required: true
    },
    sender: {
      type: userSchema,
      required: true
    },
    content: {
      type: String,
      default: ''
    }
  });
  
  const Message = mongoose.model('Message', messageSchema);
  module.exports = Message;