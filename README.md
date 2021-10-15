# Animal Welfare
App made to  solve the problem of finding and caring of abandoned or lost pets  by making the pet adoption process entirely automated and also it saves the time of user if he or she is looking for pet foundation or NGO.

This repository contains code for Animal Welfare App 


# Dependencies 

```
Nodejs
express
mongoose
dotenv
hbs
```


# DevDependencies 

```
Nodemon
morgan
```

# Steps to configure project
* First Run  ```npm install``` to install dependencies and ```npm install -d``` to install devdependencies
* Edit .env file by filling PORT NO and create your cloud mongo DB and edit [MONGO_DB_URL](https://docs.atlas.mongodb.com/getting-started/) with your DB URL
* go to login.js in public folder and add [SAWO](https://dev.sawolabs.com/dash/projects) api key
* Go to contact.hbs in templates/views folder and add your url under script tag in host variable according to from where you are running this app
* Run by ``` npm start  ```

# Demo
* This Project is hosted on HEROKU [VIEW DEMO](https://animal-welfare.herokuapp.com/)
* If you have [coil](https://coil.com/) account or [coil](https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca?hl=en) browser extension then head over [here](https://animal-welfare.herokuapp.com/) to support my site

