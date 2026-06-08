const { Router } = require('express');
const Joi = require('joi');
const postsController = require('../controllers/postsController');
const validate = require('../middlewares/validate');

const router = Router();

const createPostSchema = Joi.object({
  title: Joi.string().trim().required(),
  content: Joi.string().trim().required(),
  userId: Joi.string().hex().length(24).optional(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().trim(),
  content: Joi.string().trim(),
  userId: Joi.string().hex().length(24),
}).min(1);

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPostById);
router.post('/', validate(createPostSchema), postsController.createPost);
router.put('/:id', validate(updatePostSchema), postsController.updatePostId);
router.delete('/:id', postsController.deletePostId);

module.exports = router;
