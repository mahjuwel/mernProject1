const AppUserModel = require("../models/AppUserModel");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.CreateAppUser=(req,res)=>{
    let reqBody=req.body;
    console.log(req.body.email);
      AppUserModel.create(reqBody, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}
exports.AppUserList=(req,res,next)=>{
    AppUserModel.find()
    .then(result=>{
        res.status(200).json({
            data:result
        })
    })
}

exports.AppUserLogin=(req,res)=>{
    let username=req.body['username'];
    let password=req.body['password']
    AppUserModel.find({username:username,password:password},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          if(data.length>0){
              // Create Auth Token
              let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]}
              let token = jwt.sign( Payload,'SecretKey123456789');

              res.status(200).json({status:"success",token:token, name:data[0]['name']})
          }
          else {
              res.status(401).json({status:"unauthorized"})
          }
      }
    })


}


exports.SelectAppUser=(req,res)=>{
    let username=req.headers['username'];
    AppUserModel.find({username:username},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



exports.UpdateAppUser=(req,res)=>{
    let username=req.headers['username']
    let reqBody=req.body;
    AppUserModel.updateOne({username:username},{$set:reqBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}