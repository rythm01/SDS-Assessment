const sequelize = require("./config");
const Customer = require('../models/Customer'); 

sequelize.sync({ force: true })
  .then(() => {
    console.log('-----------------------------');
    console.log('Table created successfully');
    console.log('-----------------------------');
    sequelize.close();
  })
  .catch((err) => {
    console.error('Error creating table:', err);
    sequelize.close();
  });