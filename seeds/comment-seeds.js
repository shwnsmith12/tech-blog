const { Comment } = require('../models');

const commentData = [{
        comment_text: "Totally agree. PS5 has some cool exclusives, but GP is DOPE!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "NEat stuff .",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'console.log("haha!");',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;