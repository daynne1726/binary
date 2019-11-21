var user = require("../models/User")
var Response = require("../models/response");
var response = new Response();

module.exports.insert = (item, res) => {
    console.log(item);
    
    let newItem = new user(item);
    let obj = { message: "" };
    
    newItem.save()
    .then(resp => {
        console.log(resp);
        obj.message = resp
        res.send(obj)
    }).catch(err => {
        obj.message = err
        console.log(err);
        res.send(obj)


    })

}