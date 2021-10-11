var http=require('http');
var url=require('url');
var querystring=require('querystring');
var fs=require('fs');
const express = require('express');
const app=express();
const PORT = process.env.PORT || 3000;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null,function(err,data){
        console.log("inside err check");
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
            res.end();  
        }
    })
}).listen(PORT);
console.log(PORT);