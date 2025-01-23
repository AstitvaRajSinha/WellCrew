const mongoose = require('mongoose');

const GroupChatSchema = new mongoose.Schema({
    communityId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true }, // Problem: unique constraint
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  const GroupChatModel = mongoose.model('GroupChat', GroupChatSchema);
  module.exports = GroupChatModel;
  