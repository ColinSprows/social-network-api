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
    }
  ];
  const thoughts = [
    {
        thoughtTest: "imagine",
        username: "Pete"
    }
  ];

  await User.collection.insertMany(users);
  await Video.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});