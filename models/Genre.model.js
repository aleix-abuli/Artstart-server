const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Genre = model('Genre', new Schema(
    {
        genre: {type: String, required: true},
        items: [{type: ObjectId, ref: 'Post'}],
        coverUrl: {type: String}
    }
));

module.exports = Genre;
