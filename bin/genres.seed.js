const mongoose = require('mongoose');
require('../db');

const Genre = require('../models/Genre.model');

const genreList = ['Abstract', 'Digital', 'Painting', '3d', 'Sculpture', 'Sci-Fi', 'Fantasy',
'Drawing', 'Comic Art', 'Collage', 'Kitsch', 'Surrealism', 'Concept Art', 'Automotive',
'Manga', 'Character Design', 'Anatomy', 'Animals', 'Illustration', "Children's Art",
'Monsters', 'Fan Art', 'Fashion Illustration', 'Graphic Design', 'Horror', 'Mecha', 'Portrait',
'Realism', 'Sketch', 'Still Life', 'Tattoo Art'
];

Genre
.deleteMany()
.then((__) => {
    return (genreList.forEach((genre) => {
        Genre
        .create({genre: genre})
    }));
})
.then(() => console.log('done'))
.catch(err => console.log(`Error while creating users: ${err}`));