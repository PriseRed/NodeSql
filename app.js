const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodedb",
  password: "Cerber27"
}).promise();

connection.query("SELECT * FROM users").then( result => {console.log(result[0]);}).catch(err => {console.log(err);});

// const user = "Morning";
// const sql = "INSERT INTO users (fio) VALUES (?)";

// connection.query(sql, user, function(err, results){
//     if (err) console.log(err);
//     else console.log("Добавлено!");
// });

 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});