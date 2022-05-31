const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Post = model('Post', new Schema(
    {
        description: {type: String, required: false},
        owner: {type: ObjectId, ref: 'User'},
        imageArray: [{type: String, required: true}],
        likes: [{type: ObjectId, ref: 'User'}],
        comments: [{type: ObjectId, ref: 'Comment'}],
        genres: [{type: ObjectId, ref: 'Genre'}]
    }
));

module.exports = Post;
