const connection = require("../mysql.js");

exports.getAll = async function(req, res) {
    let arr = [];
    await connection.query("Select * from article")
    .then (data => {
        console.log("data");
        console.log(data);
        for (let i = 0; i < data[0].length; i++)
        {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err);
    });
    console.log("arr");
    console.log(arr);
    return arr;
};

exports.getOne = async function(res, req, idArticle){
    let arr = [];
    let sql = "select * from article where idArticle=?";
    console.log(req);
    filter = [req];
    console.log(req);
    await connection.query(sql, filter)
    .then(data => {
        console.log("data");
        console.log(data);
        for (let i = 0; i < data[0].length; i++)
        {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err);
    });
    console.log("arr");
    console.log(arr);
    return arr;
}