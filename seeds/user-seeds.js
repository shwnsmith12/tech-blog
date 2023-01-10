const { User } = require('../models');

const userData = [{
        username: 'PublicAgent700',
        password: 'b@mesJond'
    },
    {
        username: 'KhakiLover',
        password: 'jakefromSFlol'
    },
    {
        username: 'NewDevGuy202',
        password: 'SupEr!seCuRe@202@'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;