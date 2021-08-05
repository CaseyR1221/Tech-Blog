const { User } = require("../models");

const userData = [
  {
    username: "Casey Rowlands",
    email: "CxRow@email.com",
    password: "password",
  },
  {
    username: "Elon Musk",
    email: "MuskElon@email.com",
    password: "password",
  },
  {
    username: "Jeff Bezos",
    email: "BigJeff@email.com",
    password: "password",
  },
  {
    username: "Mark Zurkerberg",
    email: "fbLover@email.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;