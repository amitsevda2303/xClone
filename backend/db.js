const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongoURL = process.env.MONGOURI



const connectToMongo = async() =>{
    try {
        await mongoose.connect(mongoURL)
        console.log('connected Successfully')
    } catch (error) {
        console.log('unable to load')
        console.log(error.message)
    }
}
module.exports = connectToMongo;