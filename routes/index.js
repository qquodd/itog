const express = require('express');
const bodyParser = require('body-parser');
const homeController = require("../controllers/homeController.js");

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();


router.get('/', homeController.getIndex);

module.exports = router;
