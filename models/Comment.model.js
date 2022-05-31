const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Comment = model('Comment', new Schema(
    {
        message: {type: String, required: false},
        owner: {type: Schema.Types.ObjectId, ref: 'User'},
        likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
    }
));

module.exports = Comment;
