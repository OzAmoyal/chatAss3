import mongoose from 'mongoose';
import UserModel from './userModel.js';
const messageSchema = new mongoose.Schema({
  
    created: {
      type: Date,
      required: true
    },
    sender: {
      type: UserModel,
      required: true
    },
    content: {
      type: String,
      default: ''
    }
  });
  
 
  const MessageModel= mongoose.model('MessageModel', messageSchema);
  module.exports = MessageModel;