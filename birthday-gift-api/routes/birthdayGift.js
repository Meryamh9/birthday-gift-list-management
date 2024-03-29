const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const birthdayGiftControllers = require('../controllers/birthdayGiftControllers')
 
router.get('/', birthdayGiftControllers.index);
 
router.post('/', birthdayGiftControllers.insert);
 
router.put('/:id', birthdayGiftControllers.update);
 
router.delete('/:id', birthdayGiftControllers.delete);
 
module.exports = router;