//dependencies required

const mysql= require ('mysql2');
const inquirer = require ('inquirer');
require("console.table");

//mysql connection 

const connection = mysql.createConnection({
    host: 'localhost',

    //your port, if not 3306

    port: 3306,

    //my username
    user: 'root',

    //my password
    password:'University1',
    database: 'employes_db'

});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id" + connection.threadID);
    
})