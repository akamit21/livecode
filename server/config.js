"use strict";

//require('dotenv').config();

module.exports = {
  mailer: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: "livecode.codersadhu@gmail.com",
      pass: "Ravi@12345",
    },
  },
  dbConnstring: "mongodb://localhost:27017/livecode",
  sessionKey: "HelloLiveCode",
};

//'mongodb://127.0.0.1:27017/livecode',
