var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var multer = require('multer'); 
var mongoose = require('mongoose');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


/*
 * Get static content from the directory "public"
 */

app.use(express.static(__dirname + '/public'));


//Connect to the database
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/files';
mongoose.connect(connectionString);


app.get("/logout", function(req,res){
    res.json("We can log out by invoking this!");
});

//Map a varialbe to URL as a String and respond as JSON object
var alice = {username: "alice", pass: "alice"};

app.get("/alice", function(req,res){
    res.json(alice);
});


// Schema for details of the file
var FileDetailSchema = new mongoose.Schema({
    type: String,
    created: {type: Date, default: Date.now}
});


//Schema required for the Files 
var FileSchema = new mongoose.Schema({
    name: String,
    size: Number,
    info: [FileDetailSchema]
}, {collection: 'file'});

// Model for the Files
var FileModel = mongoose.model('FileModel', FileSchema);


/*
 * Old declaration
*/

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
    FileModel.find(function(err, data){
        res.json(data);
    });
});


// Return a particular index (as a param) from an arary as JSON
app.get("/file/:index", function(req,res){
    FileModel.findById(req.params.index, function(err, doc){
    res.json(doc);
    });
});

// Return details corresponding to a particular index for a file
app.get("/file/:index/detail", function(req,res){
    FileModel.findById(req.params.index, function(err, doc){
        res.json(doc.info);
    });
}); 


// Return particular detail corresponding to a particular index for a file
app.get("/file/:index/detail/:detailIndex", function(req,res){
    var file_index = req.params.index; //or req.params['index'];
    var detail_index = req.params.detailIndex; 
    res.json(files[file_index].details[detail_index]);
}); 


// Remove a file
app.delete("/file/:id", function(req,res){
    FileModel.findById(req.params.id, function(err, count){
        count.remove();
        
        FileModel.find(function(err, data){
        res.json(data);
        });
    });
});


// Input a file
app.put("/file/:id", function(req,res){
    FileModel.update({id: req.params.id}, {$set: req.body})
});


// Create a file and add it to the array
app.post("/file", function(req,res){
    //Creating an instance of the model
        var file000 = new FileModel(req.body);
        file000.save(function(err, doc){
            FileModel.find(function(err, data){
            res.json(data);
        });
    });  
});

 
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port  = process.env.OPENSHIFT_NODEJS_PORT || 3000 ;

app.listen(port, ip);