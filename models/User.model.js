const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const User = model('User', new Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        name: {type: String, default: 'Anonymous'},
        posts: [{type: ObjectId, ref: 'Post'}],
        likes: [{type: ObjectId, ref: 'Post'}],
        collections: [{type: ObjectId, ref: 'Collection'}], 
        followedBy: [{type: ObjectId, ref: 'User'}],
        following: [{type: ObjectId, ref: 'User'}],
        imageUrl: {type: String, default: 'https://icon-library.com/images/default-profile-icon/default-profile-icon-10.j'}
    }
));

module.exports = User;
