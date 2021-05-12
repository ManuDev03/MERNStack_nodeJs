const mongoose = require ('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim: true

    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value))
            {
                throw new Error('invalid email..')
            }
        }

    },
    password:
    {
        type: String,
        required: true,
        trim: true,
        minlength:7

    },
    avatar: 
    {
        type: String,
    },
    date:
    {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User 