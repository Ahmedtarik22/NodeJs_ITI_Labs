const { Router } = require('express');

const usersController = require('../controllers/usersController');
const reqLogger = require('../middlewares/reqLogger');
const validate = require('../middlewares/validate');
const createUserSchema = require('../validations/createUserValidation');
const updateUserSchema = require('../validations/updateUserValidation');

const router = Router();

// /users
router.post('/', validate(createUserSchema), usersController.createUser);
router.get('/', usersController.readUsers);
router.get('/:id', usersController.getUserById);
router.put('/:id', validate(updateUserSchema), usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
