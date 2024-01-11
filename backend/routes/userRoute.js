const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')
const newUserCheck = require('../validations/authvalidation')
const bcrypt = require('bcrypt')
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

router.post('/setuserinfo', newUserCheck, async (req, res) => {
    try {
        const secret =  process.env.JWTSECERET;
        const errors = validationResult(req);
        const { email, mobile, name, password, dob } = req.body;
        const parsedDob = new Date(dob);

        // Check if the date is valid
        if (isNaN(parsedDob.getTime())) {
          return res.status(400).json({ error: 'Invalid date format for dob' });
        }
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hasedPassword = await bcrypt.hash(password, 10)

        const condition1 = email && await User.findOne({ email: email })
        const condition2 = mobile && await User.findOne({ mobile: mobile })

        if (condition1 || condition2) {
            return res.status(409).json({ success:false, error: 'User already exists'});
        }
     


        if (email && !mobile) {
           
            const newUser = await User({
                email: email,
                name: name,
                password: hasedPassword,
                dob: parsedDob
            })
            const savedPerson = await newUser.save()
            const userPayload = {
                _id: savedPerson._id,
                email: email,
                name: name,
                dob: parsedDob,
                // You can include any other user-related information in the payload
            }
            const authToken = jwt.sign(userPayload, secret);
            return res.json({ authToken,res: "user Added successfully",success:true})
        }
        if (!email && mobile) {
           
            const newUser = await User({
                mobile: mobile,
                name: name,
                password: hasedPassword,
                dob: parsedDob
            })
            const savedUser = await newUser.save()
            
            const userPayload = {
                _id: savedUser._id,
                mobile:mobile,
                name: name,
                dob: parsedDob,
                // You can include any other user-related information in the payload
            }
            const authToken = jwt.sign(userPayload,secret);
            return res.json({authToken, res: "user Added successfully" , success:true})
        }

    } catch (error) {
        console.log('error occcured',error)
        return res.status(500).json({ success:false, error: 'Failed to create user'});
    }

})

// router.post('/login', async(req,res)=>{
//    try {
//     const secret =  process.env.JWTSECERET;
//     console.log(req.body)
//     const {email,mobile, password} = req.body;
//     const user =await User.findOne({email})
//     const mobileCheck = await User.findOne({mobile})

//     if (user && !mobile) {
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (passwordMatch) {
//             // Generate a JWT token
//             const token = jwt.sign({ username: user.name },secret);
//             // Send the token as a response
//             return res.json({ success: true, token });
//           } else {
//             // Invalid credentials
//             return res.json({ success: false, message: 'Invalid credentials' });
//           }
//     }else if(mobileCheck && !email){
//         const passwordMatch = await bcrypt.compare(password, mobileCheck.password);
//         if (passwordMatch) {
//             // Generate a JWT token
//             const token = jwt.sign({ username: user.name },secret);
//             // Send the token as a response
//             return res.json({ success: true, token });
//           } else {
//             // Invalid credentials
//             return res.json({ success: false, message: 'Invalid credentials ' });
//           }        
//     }else {
//       // User not found
//       return res.json({ success: false, message: 'User not found main error ' });
//     }
//    } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }


// })


module.exports = router;