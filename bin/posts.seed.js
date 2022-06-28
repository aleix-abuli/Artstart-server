const mongoose = require('mongoose');
require('../db');

const Post = require('../models/Post.model');

const posts = [
    {
        _id: '62a98ec10981fa78a1bbc251',
        description: "It's one of those days",
        owner: '62a8d81cab988d09087b90cc',
        imageArray:['https://hifructose.com/wp-content/uploads/2019/06/MK1.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086b0', '62b994dcd7c1dd50f40086a8', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a98f8b7840552412d711dc',
        description: "Splotch",
        owner: '62a8d81cab988d09087b90cc',
        imageArray:['https://preview.redd.it/iuqn7rgfvpf71.jpg?width=640&crop=smart&auto=webp&s=3abf505d908b887b6523247de449497ce91f3bba'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086a8', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a9901bb7d98490eee1a903',
        description: "Pool of trust",
        owner: '62a8d849ff371efb49696bba',
        imageArray:['https://queerthoughts.com/images/Exhibitions/David_Rappeneau/David_Rappeneau_013.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f4008698', '62b994dcd7c1dd50f400869d', '62b994dcd7c1dd50f40086ac']
    },
    {
        _id: '62a9909dbbdd01c134071c47',
        description: ":)",
        owner: '62a8d849ff371efb49696bba',
        imageArray:['https://i.pinimg.com/originals/ed/c8/14/edc8143eac6c7b077ae92433a03acfd9.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f4008698', '62b994dcd7c1dd50f400869d', '62b994dcd7c1dd50f40086ac', '62b994dcd7c1dd50f400869b']
    },
    {
        _id: '62a99167c993b39582b5ffb9',
        description: "Life in Mars",
        owner: '62a8da99fd51e2cbea291018',
        imageArray:['https://64.media.tumblr.com/184519f8a4a553b12051cc1df67e1bed/tumblr_nndtrdjbaU1rhdt2to7_1280.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869b', '62b994dcd7c1dd50f400869e']
    },
    {
        _id: '62a99198ecf675df107182cc',
        description: "Moonwatcher",
        owner: '62a8da99fd51e2cbea291018',
        imageArray:['https://i1.wp.com/migueprofe.com/wp-content/uploads/2020/01/doorofperception.com-moebius-color-61.jpg?resize=840%2C1085&ssl=1'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869b', '62b994dcd7c1dd50f400869e']
    },
    {
        _id: '62a991f71bf29eb74bc1614e',
        description: "Fear yourself",
        owner: '62a8db097369d7ab488faac5',
        imageArray:['https://phantom-elmundo.unidadeditorial.es/db80ee5ec6aea0cab475c443cbe49662/crop/315x144/1597x2000/resize/1200/f/jpg/assets/multimedia/imagenes/2022/04/12/16497867280294.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869e', '62b994dcd7c1dd50f40086b0', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a99234a636f46f3af41019',
        description: "Self portrait?",
        owner: '62a8db097369d7ab488faac5',
        imageArray:['https://preview.redd.it/ts96j2mwtp351.jpg?auto=webp&s=aa22a984b11e90497ac57ec5112a30ea023dfd67'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869e', '62b994dcd7c1dd50f40086b0', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a992d3dccf9bb1eb55e2bc',
        description: "Cute :) ",
        owner: '62a8dbc65f2769efda3be154',
        imageArray:['https://wertn.com/wp-content/uploads/2020/01/coucou-933x1200.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086b3', '62b994dcd7c1dd50f4008697', '62b994dcd7c1dd50f400869e', '62b994dcd7c1dd50f400869b', '62b994dcd7c1dd50f40086a0']
    },
    {
        _id: '62a992f191dd4850d2d3f45c',
        description: "Just a sip",
        owner: '62a8dbc65f2769efda3be154',
        imageArray:['https://edwin-europe.com/media/wysiwyg/1556875040-ugo-2.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f4008697', '62b994dcd7c1dd50f400869e', '62b994dcd7c1dd50f400869b']
    },
    {
        _id: '62a9956a01781e9c17b03caf',
        description: "Lift off",
        owner: '62a8dc7e2a5c69cbbdd3343b',
        imageArray:['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bella-hadid-estatua-hajime-sorayama-dior-1559198048.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869b', '62b994dcd7c1dd50f40086a8', '62b994dcd7c1dd50f40086af']
    },
    {
        _id: '62a9958896dd5d1ffd94c479',
        description: "Think about it",
        owner: '62a8dc7e2a5c69cbbdd3343b',
        imageArray:['https://www.juxtapoz.com/media/k2/galleries/56156/JuxtapozHajimeSorayama02.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869b', '62b994dcd7c1dd50f40086a8', '62b994dcd7c1dd50f40086af']
    },
    {
        _id: '62a9967fdd4f53dd1a25635a',
        description: "Warming out",
        owner: '62a8dd5d01ea43b114d4dd27',
        imageArray:['https://images.squarespace-cdn.com/content/v1/5c6bf5897788977a41bf366e/d4515cc4-f3f4-486b-8246-094132a9000f/P20210907_202905688_E5030256-357D-40A9-85F1-66C0833EFFF3.JPG?format=1000w'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086ae', '62b994dcd7c1dd50f40086b0', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a996918b54ec3bce420f7c',
        description: "Hungry",
        owner: '62a8dd5d01ea43b114d4dd27',
        imageArray:['https://cdn.oldskull.net/wp-content/uploads/2021/12/sillda-ilustraciones-psicodelicas-mujer-lengua-en-plato.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086ae', '62b994dcd7c1dd50f40086b0', '62b994dcd7c1dd50f40086b4']
    },
    {
        _id: '62a999ce06fb9f18b0e4dedd',
        description: "Mermaid",
        owner: '62a98b8e6937e9f7f471b247',
        imageArray:['https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1524963210838-Y46FSMUEVE6MMM20CX09/Philippe-Caza-00007-1.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f400869c', '62b994dcd7c1dd50f40086a6']
    },
    {
        _id: '62a999da853e4b3a36cf4ee3',
        description: "Inner monsters",
        owner: '62a98b8e6937e9f7f471b247',
        imageArray:['https://www.geek-art.net/wp-content/uploads/2018/05/CAZA-CTHULHU-light.jpg'],
        likes: [],
        comments:[],
        genres: ['62b994dcd7c1dd50f40086aa', '62b994dcd7c1dd50f400869c']
    },
    {
        _id: '62a999f31c688b58e3bbc8d1',
        description: "All thoughts head full",
        owner: '62a98bf1be574eb7ddfb2db2',
        imageArray:['https://www.art.salon/images/philippe-druillet_unknown_AID101077.jpg?f=grey'],
        likes: [],
        comments:[],
        genres: []
    },
    {
        _id: '62a99a070fc38e8b17c96811',
        description: "Your faves could never",
        owner: '62a98bf1be574eb7ddfb2db2',
        imageArray:['https://cafans.b-cdn.net/images/Category_50749/subcat_118660/Druillet%20couv%20Pilote1.jpg'],
        likes: [],
        comments:[],
        genres: []
    },
    {
        _id: '62a99b528a4e54ed88bc0d72',
        description: "Silly weekend sketch",
        owner: '62a98c70e50f9d003ad96aa5',
        imageArray:['https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/1200px-Last_Judgement_%28Michelangelo%29.jpg'],
        likes: [],
        comments:[],
        genres: []
    },
    {
        _id: '62a99b63134c9e12439bab3e',
        description: "How I see you when I'm wasted and you bring me a water bottle",
        owner: '62a98c70e50f9d003ad96aa5',
        imageArray:['https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg'],
        likes: [],
        comments:[],
        genres: []
    },
    
];

Post
.deleteMany()
.then((__) => {
    Post
    .create(posts)
    .then((newPosts) => {
        console.log(`Created ${newPosts.length} posts`);
        mongoose.connection.close();
    })
})
.catch(err => console.log(`Error while creating posts: ${err}`));
