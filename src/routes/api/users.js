const express = require('express')
const User = require('../../models/user')
const router = express.Router()


// register user
router.post('/', async (req,res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(err)
    {
        res.status(500).send(err)
        console.error(err.message)
    }
})
module.exports = router