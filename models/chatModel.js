const { default: mongoose, model, Schema } = require('mongoose')

const chatSchema = new Schema({
    chatName: {
        type: String,
        trim: true ,
        required : true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })

const chatModel = model('chats', chatSchema)
module.exports = chatModel;