//routerController.js
var mongoose = require('./mongooseController');
var nodemailer = require('./nodemailer');

//export module
module.exports = (app) => {
  //get api
  app.get('/api/*/get(/:id)?', (req, res) => {
    path = req.path.toString();
    if(path.includes('home')){
      mongoose.getIntro().then((doc) => {
        res.status(200).send({result: doc});
      });
    }
    else if(path.includes('experience')){
      mongoose.getExp().then((doc) => {
        res.status(200).send({result: doc});
      });
    }
    else if(path.includes('skills')){
      mongoose.getSkill().then((doc) => {
        res.status(200).send({result: doc});
      });
    }
    else if(path.includes('education')){
      mongoose.getEdu().then((doc) => {
        res.status(200).send({result: doc});
      });
    }
    else if(path.includes('projects')){
      mongoose.getProj().then((doc) => {
        res.status(200).send({result: doc});
      });
    }
  });

  //edit  
  app.post('/api/*/edit/*', (req, res) => {
    path = req.path.toString();
    if(path.includes('home')){
      result = mongoose.updateIntro(req.body).then(() => {
        res.status(200).send({});
      });
    }
    else if(path.includes('experience')){
      result = mongoose.updateExp(req.body).then(() => {
        res.status(200).send({});
      });
    }
    else if(path.includes('skills')){
      result = mongoose.updateSkill(req.body).then(() => {
        res.status(200).send({});
      });
    }
    else if(path.includes('education')){
      result = mongoose.updateEdu(req.body).then(() => {
        res.status(200).send({});
      });
    }
    else if(path.includes('projects')){
      result = mongoose.updateProj(req.body).then(() => {
        res.status(200).send({});
      });
    }
  });

  //add api
  app.post('/api/*/add', (req, res) => {
    path = req.path.toString();
    if(path.includes('experience')){
      mongoose.addExp(req.body).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('skill')){
      mongoose.addSkill(req.body).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('education')){
      mongoose.addEdu(req.body).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('projects')){
      mongoose.addProj(req.body).then(() =>{
        res.status(200).send({});
      });
    }
  });

  //delete api
  app.delete('/api/*/delete/:id', (req, res) => {
    path = req.path.toString();
    if(path.includes('experience')){
      mongoose.deleteExp(req.params.id).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('skill')){
      mongoose.deleteSkill(req.params.id).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('education')){
      mongoose.deleteEdu(req.params.id).then(() =>{
        res.status(200).send({});
      });
    }
    else if(path.includes('projects')){
      mongoose.deleteProj(req.params.id).then(() =>{
        res.status(200).send({});
      });
    }
});

//send mail
app.post('/api/contact/mail', (req, res) => {
  nodemailer.sendMail(req.body)
  .then((info)=>{
    res.status(200).send(info.response);
  })
  .catch((err)=>{
    console.log(err);
  });
});

  //redirect all other routes
  app.get('*', (req, res) => {
    res.sendFile('F:/MEAN Projects/MEAN_kPatel/public/index.html');
  });
}
