
require('dotenv').config()
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

exports.userAuth = (req, res, next) => {

    if (!req.headers.authorization) return res.status(223).json({ error: 'token is not correct' })

    const token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, process.env.user_secret, async (err, result) => {

        if (err) return res.status(223).json({ error: err.message })

        const user = await userModel.findById(result._id)
        req.user = user
        next()

    })
}