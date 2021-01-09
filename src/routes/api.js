const express = require('express');
const router = express.Router();
const Vendor = require('../models/vendors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto')
const validateRegisterInput = require("../components/login/Register");
const validateLoginInput = require("../components/login/loginauth");
const Complaint = require('../models/complaints');
const Asset = require('../models/asset');
const Login = require('../models/login');
const User = require('../models/usermaster')
const UseR = require("../models/UseR");
const keys = require("../../config/keys");
var async = require("async");
var nodemailer = require("nodemailer");
//Routes for vendors
router.get('/', (req,res) => {

    Vendor.find({})
    .then((data) => {
console.log('Data', data);
res.json(data);
    })
    .catch((erroe) => {
        console.log('error', daerrorta); 
    })
   
});

router.post('/save', (req,res) => {
    console.log('Body', req.body);
    const data = req.body;
    const newVendor = new Vendor(data);


    newVendor.save((error) => {
        if (error) {
            res.status(500).json({msg:'Sorry internal server error'});
            return;
        } 
           return res.json({
                msg: 'Your data has been saved!!!'
            });
        })
});

//Routes for complaints
router.get('/comp', (req,res) => {

    Complaint.find({})
    .then((data) => {
console.log('Data', data);
res.json(data);
    })
    .catch((erroe) => {
        console.log('error', daerrorta); 
    })
   
});

router.post('/compsave', (req,res) => {
    console.log('Body', req.body);
    const data = req.body;
    const newComplaint = new Complaint(data);


    newComplaint.save((error) => {
        if (error) {
            res.status(500).json({msg:'Sorry internal server error'});
            return;
        } 
           return res.json({
                msg: 'Your comp data has been saved!!!'
            });
        })
});








// POST to saveresethash
router.post('/saveresethash', async (req, res) => {
    let result;
    try {
      // check and make sure the email exists
      const query = User.findOne({ email: req.body.email });
      const foundUser = await query.exec();
  
      // If the user exists, save their password hash
      const timeInMs = Date.now();
      const hashString = `${req.body.email}${timeInMs}`;
      const secret = 'alongrandomstringshouldgohere';
      const hash = crypto.createHmac('sha256', secret)
                         .update(hashString)
                         .digest('hex');
      foundUser.passwordReset = hash;
  
      foundUser.save((err) => {
        if (err) { result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to reset your password. Please Try again' })); }
        result = res.send(JSON.stringify({ success: true }));
      });
    } catch (err) {
      // if the user doesn't exist, error out
      result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to reset your password. Please Try again' }));
    }
    return result;
  });






















//routes for forget password

router.post('/resetpassword',(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
           
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User dont exists with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"no-replay@insta.com",
                    subject:"password reset",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
                    `
                })
                res.json({message:"check your email"})
            })

        })
    })
})





















//Routes for Asset onboarding data
router.get('/asset', (req,res) => {

    Asset.find({})
    .then((data) => {
console.log('Data', data);
res.json(data);
    })
    .catch((erroe) => {
        console.log('error', daerrorta); 
    })
   
});

router.post('/assetsave', (req,res) => {
    console.log('Body', req.body);
    const data = req.body;
    const newAsset = new Asset(data);


    newAsset.save((error) => {
        if (error) {
            res.status(500).json({msg:'Sorry internal server error'});
            return;
        } 
           return res.json({
                msg: 'Your assset data has been saved!!!'
            });
        })
});




//Routes for newuser(user-master) onboarding data
router.get('/adduser', (req,res) => {

   User.find({})
    .then((data) => {
console.log('Data', data);
res.json(data);
    })
    .catch((erroe) => {
        console.log('error', daerrorta); 
       
    })
   
});

router.post('/addusersave', (req,res) => {
    console.log('Body', req.body);
    const data = req.body;
    const newUser = new User(data);


    newUser.save((error) => {
        if (error) {
            res.status(500).json({msg:'Sorry internal server error'});
            return;
        } 
return res.json({
                msg: 'Your new user data has been saved!!!',
                
            });
            
        })
});
//Routes for Login page data

router.get('/login', (req,res) => {

    Login.find({})
    .then((data) => {
console.log('Data', data);
res.json(data);
    })
    .catch((erroe) => {
        console.log('error', daerrorta); 
    })
   
});





router.post('/loginsave', (req,res) => {
    console.log('Body', req.body);
    const data = req.body;
    const newLogin = new Login(data);


    newLogin.save((error) => {
        if (error) {
            res.status(500).json({msg:'Sorry internal server error'});
            return;
        } 
           return res.json({
                msg: 'Your Login data has been saved!!!'
            });
        })
  
});         



//new code
router.post('/register', (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  UseR.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new UseR({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });



//forget password route
















  router.post('/loginn', (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    UseR.findOne({ email }).then(user => {
      // Check if user exists 
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;