const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const User = model('User', new Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        name: {type: String, default: 'Anonymous'},
        description: {type: String},
        location: {type: String},
        posts: [{type: ObjectId, ref: 'Post'}],
        likes: [{type: ObjectId, ref: 'Post'}],
        collections: [{type: ObjectId, ref: 'Collection'}], 
        followedBy: [{type: ObjectId, ref: 'User'}],
        following: [{type: ObjectId, ref: 'User'}],
        imageUrl: {type: String, default: 'https://us.123rf.com/450wm/diddleman/diddleman1505/diddleman150500024/39789195-no-user-profile-picture-hand-drawn-illustration.jpg?ver=6'}
    }
));

module.exports = User;
