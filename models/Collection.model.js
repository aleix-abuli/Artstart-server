const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Collection = model('Collection', new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: false},
        owner: {type: ObjectId, ref: 'User'},
        coverUrl: {type: String},
        items: [{type: ObjectId, ref: 'Post'}],
        comments: [{type: ObjectId, ref: 'Comment'}]
    }
));

module.exports = Collection;
