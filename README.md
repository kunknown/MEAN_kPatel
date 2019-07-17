# MEAN_kPatel
A digital portfolio built using MEAN stack

**INSTRUCTIONS**


**FEATURES**
**Regular User**
*All the pages will be read-only (cannot edit, add, or delete content of the page) for regular user*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/home_reg.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_exp_reg.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_skill_reg.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_edu_reg.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/project_reg.PNG)
*Login page can be used to switch to privilaged user by clicking the GREEN log-in button after entering appropriate username & password (specified in the config.js file)*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/login_reg.PNG)

**Privilaged User**
*All the pages will be editable for the privilaged user. The BLUE edit button on the left can be used to edit the content of the card.*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/home_priv.PNG)
*The RED delete button on the right can be used to delete the card. The GREEN add button under the card can be used to add a new card*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_exp_priv.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_edu_priv.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/project_priv.PNG)
*Experience, Education, and Project cards can be added via the GREEN add button, which will open a new page with empty card.*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/add_priv.PNG)
*Experience, Education, and Project cards can be edited via the BLUE edit button, which will open that card in a new page.*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/edit_priv.PNG)
*Skills can be added by typing it in the input field and pressing ENTER. Skill can be deleted by clicking on the appropriate tag.*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/resume_skill_priv.PNG)
*Login page can be used to switch back to regular user by clicking the RED log-out button.*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/login_priv.PNG)

**Responsive UI**
*The app is responsive and the UI of both, the menu & the page, will change accordingly*
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/mobile_home_reg.PNG)
![](https://github.com/kunknown/MEAN_kPatel/blob/master/public/readmeContent/mobile_nav.PNG)

**config.js (NOTE: add in root folder)**
*Create this file in the root folder with the following code:*
module.exports = {
    url: "*(mongoDB URL)*",
    privateUser: "*(privilaged-username)*",
    privatePass: "*(privilaged-password)*",
    publicUser: "*(regular-username)*",
    publicPass: "*(regular-password)*",
    email: "*(email address)*",
    ePass: "*(email password)*"
};
