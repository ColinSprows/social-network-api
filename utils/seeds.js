const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomVideos } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [
    {
        username: "Pete",
        email: "peterpiper@gmail.com"
    },
    {
      username: "Tim",
      email: "timtest@gmail.com"
    }
  ];
  const thoughts = [
    {
        thoughtText: "imagine",
        username: "Pete"
    }
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});