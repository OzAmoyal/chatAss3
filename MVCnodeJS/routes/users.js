import usersController from '../controllers/usersController'
import express from 'express'
const router = express.Router()
router.post('/', usersController.createUser)
module.exports = router;