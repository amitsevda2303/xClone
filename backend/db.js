const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://rohit:rohit@login.nhevlq2.mongodb.net/'


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