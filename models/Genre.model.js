const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Genre = model('Genre', new Schema(
    {
        genre: {
            type: String,
            enum: ['Abstract', 'Digital', 'Painting', '3d', 'Sculpture', 'Sci-Fi', 'Fantasy',
            'Drawing', 'Comic Art', 'Collage', 'Kitsch', 'Surrealism', 'Concept Art', 'Automotive',
            'Manga', 'Character Design', 'Anatomy', 'Animals', 'Illustration', "Children's Art",
            'Monsters', 'Fan Art', 'Fashion Illustration', 'Graphic Design', 'Horror', 'Mecha', 'Portrait',
            'Realism', 'Sketch', 'Still Life', 'Surrealism', 'Tattoo Art'
            ],
            required: true
        },
        items: [{type: ObjectId, ref: 'Post'}],
        coverUrl: {type: String}
    }
));

module.exports = Genre;
