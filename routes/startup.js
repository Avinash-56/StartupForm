const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Startup = require("../models/Startup");
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const admin = require('../U&P/admin.json')

module.exports = router;

router.get("/me", auth, async (req, res) => {
  try {
    const startup = await Startup.findOne({ user: req.user.id });
    if (!startup)
      return res.status(400).send({ msg: "No details for you Startup" });
    res.json(startup)  
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get('/', async(req,res)=>{
    try {
        const startups = await Startup.find().populate('user', ['name', 'email'])
        if(!startups) return res.status(404).json({msg: 'No Startups found'})
        res.json(startups)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.post(
    "/",
    [
      auth,
      [
        check("name", "Name is required").not().isEmpty(),
        check("logo", "Logo is required").not().isEmpty(),
        check("stage", "Stage is required").not().isEmpty(),
        check("profit", "Profit is required").not().isEmpty(),
        check("founded", "Founded is required").not().isEmpty(),
        check("bio", "Bio is required").not().isEmpty(),
        check("fOrb", "Please select any one").not().isEmpty(),
        check("address", "Address is required").not().isEmpty(),
        check("registrationNumber", "Registraion Number is required").not().isEmpty(),
        check("founder", "Founder Name is required is required").not().isEmpty(),

      ],
    ],
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      let {
        name,
        logo,
        stage,
        profit,
        founded,
        bio,
        fOrb,
        address,
        registrationNumber,
        founder
      } = req.body;
      
      founded = new Date(founded)
      console.log(founded)
      const startupFields = {};
  
      startupFields.user = req.user.id;
      startupFields.name = name
      startupFields.logo = logo;
       startupFields.stage = stage;
       startupFields.profit = profit;
      startupFields.bio = bio;
      startupFields.founded = founded;
       startupFields.fOrb = fOrb;
       startupFields.address = address;
       startupFields.registrationNumber = registrationNumber;
       startupFields.founder = founder;

  
      
  
      try {
        let startup = await Startup.findOne({ user: req.user.id });
  
        if (startup) {
          startup = await Startup.findOneAndUpdate(
            { user: req.user.id },
            { $set: startupFields },
            { new: true }
          );
  
          return res.json(startup);
        }
  
        startup = new Startup(startupFields);
  
        await startup.save();
        res.json(startup);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );


router.get('/:id', async (req,res)=>{
    try {
        // if(admin.email !== req.email.email) return res.status(401).json({msg: "Not Authorized"})
        const startup = await Startup.findById(req.params.id) 
        if(!startup) return res.status(400).json({msg:"No such startup exists"})

        res.json(startup)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
  
})