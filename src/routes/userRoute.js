const express = require('express');
const router = express.Router();
const userAct = require("../controllers/usersController");

router.get('/', userAct.getUsers);
router.post('/',userAct.createUser);
module.exports = router;