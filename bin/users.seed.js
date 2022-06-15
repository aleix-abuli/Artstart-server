const mongoose = require('mongoose');
require('../db');

const User = require('../models/User.model');

const users = [
    {
        _id: '62a8d81cab988d09087b90cc',
        username: 'mikikim',
        email: 'miki@kim.kr',
        password: '1234',
        name: 'Miki Kim',
        posts: ['62a98ec10981fa78a1bbc251', '62a98f8b7840552412d711dc'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://i.pinimg.com/originals/76/9a/65/769a65e3530e4d6b6d3ef2c54cba8c5f.png'
    },
    {
        _id: '62a8d849ff371efb49696bba',
        username: 'mitsubishi',
        email: 'david@rappeneau.com',
        password: '1234',
        name: 'David Rappeneau',
        posts: ['62a9901bb7d98490eee1a903', '62a9909dbbdd01c134071c47'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://www.juxtapoz.com/media/k2/galleries/67522/tumblr_mt5vdjweRC1qki8j1o1_500.jpg'
    },
    {
        _id: '62a8da99fd51e2cbea291018',
        username: 'moebius',
        email: 'jean@giraud.fr',
        password: '1234',
        name: 'Moebius',
        posts: ['62a99167c993b39582b5ffb9', '62a99198ecf675df107182cc'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://preview.redd.it/85m2m815rif61.jpg?auto=webp&s=6f181e16446f62d48491667995c4089066075742'
    },
    {
        _id: '62a8db097369d7ab488faac5',
        username: 'burningcharles',
        email: 'charles@burns.com',
        password: '1234',
        name: 'Charles Burns',
        posts: ['62a991f71bf29eb74bc1614e', '62a99234a636f46f3af41019'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://i.pinimg.com/736x/9a/30/6e/9a306ee9dc863a0c5bf5bf645c481751--self-portraits-journals.jpg'
    },
    {
        _id: '62a8dbc65f2769efda3be154',
        username: 'bienvenus',
        email: 'ugo@bienvenu.com',
        password: '1234',
        name: 'Ugo Bienvenu',
        posts: ['62a992d3dccf9bb1eb55e2bc', '62a992f191dd4850d2d3f45c'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://wertn.com/wp-content/uploads/2020/01/ugo2-1200x847.jpg'
    },
    {
        _id: '62a8dc7e2a5c69cbbdd3343b',
        username: 'sorayama',
        email: 'hajime@sorayama.jp',
        password: '1234',
        name: 'Hajime Sorayama',
        posts: ['62a9956a01781e9c17b03caf', '62a9958896dd5d1ffd94c479'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://barnebys.imgix.net/https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F54284046e4b001c7872c8bf1%2F5b558d2a0e2e72a170de25d9%2F5c331a3940ec9a8d36dc1e92%2F1557903708948%2FHS_paint_048.jpg?auto=format%2Ccompress&crop=0&cs=tinysrgb&fit=crop&h=400&ixlib=php-2.3.0&padding=by-color&trim=auto&w=400&s=6ee69f70bff5d76b03b5f9ab7e2c640a'
    },
    {
        _id: '62a8dd5d01ea43b114d4dd27',
        username: 'silllda',
        email: 'hajime@sorayama.jp',
        password: '1234',
        name: 'SilllDA',
        posts: ['62a9967fdd4f53dd1a25635a', '62a996918b54ec3bce420f7c '],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://cdn.oldskull.net/wp-content/uploads/2021/12/mujer-huevo-comida-por-otra-mujer-ilustracion-de-silllda.jpg'
    },
    {
        _id: '62a98b8e6937e9f7f471b247',
        username: 'caza.phil',
        email: 'philippe@caza.fr',
        password: '1234',
        name: 'Philippe Caza',
        posts: ['62a999ce06fb9f18b0e4dedd', '62a999da853e4b3a36cf4ee3'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://i.pinimg.com/originals/80/bf/5e/80bf5e9b04957e0241816321b3dfb755.png'
    },
    {
        _id: '62a98bf1be574eb7ddfb2db2',
        username: 'druillet',
        email: 'philippe@druillet.fr',
        password: '1234',
        name: 'Philippe Druillet',
        posts: ['62a999f31c688b58e3bbc8d1', '62a99a070fc38e8b17c96811'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'http://2.bp.blogspot.com/-Sa-N48-jkyM/UqfPPlnbebI/AAAAAAAAQeo/nwU8xZTWJKo/s1600/portada+pilotesp79.jpg'
    },
    {
        _id: '62a98c70e50f9d003ad96aa5',
        username: 'buonarroti',
        email: 'michel@angelo.fr',
        password: '1234',
        name: 'Michelangelo',
        posts: ['62a99b528a4e54ed88bc0d72', '62a99b63134c9e12439bab3e'],
        likes: [],
        collections: [],
        followedBy: [],
        following: [],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg'
    }
];

User
.deleteMany()
.then((__) => {
    User
    .create(users)
    .then((newUsers) => {
        console.log(`Created ${newUsers.length} users`);
        mongoose.connection.close();
    })
})
.catch(err => console.log(`Error while creating users: ${err}`));
