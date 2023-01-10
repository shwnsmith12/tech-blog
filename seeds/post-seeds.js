const { Post } = require('../models');

const postData = [{
        title: 'Best New Console',
        content: 'The choice for best console is still entirely up to the user. While Sony has their merits, Microsoft is really bringing it with all the content available with Games Pass.',
        user_id: 1

    },
    {
        title: 'Starting at [0]',
        content: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
        user_id: 2
    },
    {
        title: 'In The Beginning..',
        content: 'there was: console.log("Hello, World!")',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;