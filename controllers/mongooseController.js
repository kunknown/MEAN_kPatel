//mongoController.js
const mongoose = require('mongoose');

//mongoDB Config
const mongoURL = 'mongodb://kPatel:kPatel123@ds347917.mlab.com:47917/mean-kpatel';

var expSchema, skillSchema, eduSchema, projectSchema, expModel, skillModel, eduModel, projectModel;

//options
options = {new: true, upsert: true};

module.exports.init = () =>{
    //mongoDB driver
    mongoose.set('useFindAndModify', false);

    //connect to mongoDB
    mongoose.connect(mongoURL, {useNewUrlParser: true});

    //verify mongoDB connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', function(){
    console.log('Successfully connected to mongoDB.')
    ;});

    //create Schemas
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
    introModel = mongoose.model('Introduction', introSchema);
    expModel = mongoose.model('Experience', expSchema);
    skillModel = mongoose.model('Skills', skillSchema);
    eduModel = mongoose.model('Education', eduSchema);
    projModel = mongoose.model('Projects', projectSchema);
}

//get record
module.exports.getIntro = async () =>{
    return await introModel.find({});
}
module.exports.getExp = async () => {
    return await expModel.find({});
}
module.exports.getSkill = async () => {
    return await skillModel.find({});
}
module.exports.getEdu = async () => {
    return await eduModel.find({});
}
module.exports.getProj = async () => {
    return await projModel.find({});
}

//update record
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