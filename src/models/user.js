const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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


userSchema.pre('save', async function(next){
    const user = this

    if (user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User 