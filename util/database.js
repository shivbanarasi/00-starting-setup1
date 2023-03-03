const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Banarasi#0542',{dialect:'mysql',
host:'localhost'
});
module.exports=sequelize;