var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var multer = require('multer'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


/*
 * Get static content from the directory "public"
 */


app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));


app.get("/logout", function(req,res){
    res.json("We can log out by invoking this!");
});

//Map a varialbe to URL as a String and respond as JSON object
var alice = {username: "alice", pass: "alice"};

app.get("/alice", function(req,res){
    res.json(alice);
});


//Array of Files 
var files = [
    {fileName: "File1", fileSize:"200KB", details:[
        {type: "javascript"}, 
        {extension: "js"},
        {lines: 80}
    ]},
    {fileName: "File2", fileSize:"300KB", details:[]},
    {fileName: "File3", fileSize:"400KB", details:[]},
    {fileName: "File4", fileSize:"500KB", details:[]},
];


//Map an array of files to URL as a String and return it as a JSON object
app.get("/file", function(req,res){
    res.json(files);
});


// Return a particular index (as a param) from an arary as JSON
app.get("/file/:index", function(req,res){
    var file_index = req.params.index; //or req.params['index'];
    res.json(files[file_index]);
});


// Return details corresponding to a particular index for a file
app.get("/file/:index/detail/:detailIndex", function(req,res){
    var file_index = req.params.index; //or req.params['index'];
    var detail_index = req.params.detailIndex; 
    res.json(files[file_index].details[detail_index]);
}); 


// Remove a file
app.delete("/file/:id", function(req,res){
    var index = req.params.id;
    files.splice(index, 1);
    res.json(files);
});


// Input a file
app.put("/file/:id", function(req,res){
    files[req.params.id] = req.body;
    res.json(files);
});


// Create a file and add it to the array
app.post("/file", function(req,res){
    var object = req.body; // {fileName: "FILE", fileSize:"250KB"};
    files.push(object);
    res.json(files);
 });
 
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port  = process.env.OPENSHIFT_NODEJS_PORT || 3000 ;

app.listen(port, ip);