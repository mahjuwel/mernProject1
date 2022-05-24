const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    name:{type:String},
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    role:{type:String},
    password:{type:String},
    photo: {type:String},  
},{versionKey:false});
const AppUserModel=mongoose.model('AppUser',DataSchema);
module.exports=AppUserModel