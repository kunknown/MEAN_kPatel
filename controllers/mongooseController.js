//mongoController.js
const mongoose = require('mongoose');

//mongoDB Config
const config = require('../config');
const mongoURL = config.url;

//default user/pass
username = config.publicUser;
password = config.publicPass;

var expSchema, skillSchema, eduSchema, projectSchema, expModel, skillModel, eduModel, projectModel;

//options
options = {new: true, upsert: true};

module.exports.initConnection = (usr = username, pass = password) =>{
    var error;
    const options = {
        user: usr,
        pass: pass,
        useNewUrlParser: true,
        connectTimeoutMS: 300000,
    }

    //mongoDB driver
    mongoose.set('useFindAndModify', false);

    //connect to mongoDB
    mongoose.connect(mongoURL, options)
    .then(()=>{
        //verify mongoDB connection
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', function(){
        console.log('Successfully connected to mongoDB.')
        ;});
    },
    (err)=>{
        error = err;
    });
    return error;
}

//create schema & models
module.exports.createSchemaModel = () => {
    //create Schemas
    adminSchema = new mongoose.Schema({
        admin: Boolean
    });
    introSchema = new mongoose.Schema({
        title: String,
        details: String
    });
    expSchema = new mongoose.Schema({
        title: String,
        location: String,
        date: String,
        details: String
    });

    skillSchema = new mongoose.Schema({
        name: String,
    });

    eduSchema = new mongoose.Schema({
        title: String,
        location: String,
        date: String,
        details: String
    });

    projectSchema = new mongoose.Schema({
        title: String,
        link: String,
        technology: String,
        details: String
    });

    //Create Models
    adminModel = mongoose.model('Admin', adminSchema);
    introModel = mongoose.model('Introduction', introSchema);
    expModel = mongoose.model('Experience', expSchema);
    skillModel = mongoose.model('Skills', skillSchema);
    eduModel = mongoose.model('Education', eduSchema);
    projModel = mongoose.model('Projects', projectSchema);

    //create admin record
    adminModel.findOne({}).then((doc)=>{
        if(!doc){
            adminModel.create({admin: false});
        }
    });
}

//disconnect
module.exports.closeConnection = () => {
    return mongoose.connection.close();
}

//get record
module.exports.getAdmin = async () => {
    return await adminModel.findOne({});
}
module.exports.getIntro = async () =>{
    return await introModel.find({});
}
module.exports.getExp = async (id) => {
    if(id){
        return await expModel.findOne({_id: id})
    }
    return await expModel.find({});
}
module.exports.getSkill = async () => {
    return await skillModel.find({});
}
module.exports.getEdu = async (id) => {
    if(id){
        return await eduModel.findOne({_id: id});
    }
    return await eduModel.find({});
}
module.exports.getProj = async () => {
    if(id){
        return await projModel.findOne({_id: id});
    }
    return await projModel.find({});
}

//update record
module.exports.updateAdmin = (data) => {
    return adminModel.findOneAndUpdate({}, data, options);
}
module.exports.updateIntro = (data) =>{
    return introModel.findOneAndUpdate({_id: data._id}, data, options);
}
module.exports.updateExp = (data) =>{
    return expModel.findOneAndUpdate({_id: data._id}, data, options);
}
module.exports.updateSkill = (data) =>{
    return skillModel.findOneAndUpdate({_id: data._id}, data, options);
}
module.exports.updateEdu = (data) =>{
    return eduModel.findOneAndUpdate({_id: data._id}, data, options);
}
module.exports.updateProj = (data) =>{
    return projModel.findOneAndUpdate({_id: data._id}, data, options);
}

//add record
module.exports.addExp = (data) =>{
    return expModel.create(data);
}
module.exports.addSkill = (data) =>{
    return skillModel.create(data);
}
module.exports.addEdu = (data) =>{
    return eduModel.create(data);
}
module.exports.addProj = (data) =>{
    return projModel.create(data);
}

//delete record
module.exports.deleteExp = (id) =>{
    return expModel.findByIdAndDelete(id);
}
module.exports.deleteSkill = (id) =>{
    return skillModel.findByIdAndDelete(id);
}
module.exports.deleteEdu = (id) =>{
    return eduModel.findByIdAndDelete(id);
}
module.exports.deleteProj = (id) =>{
    return projModel.findByIdAndDelete(id);
}