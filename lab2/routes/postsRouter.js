const { Router } = require('express');
const postsController = require('../controllers/postsController');
const validatePost = require('../middlewares/validatePost');

const router = Router();

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPostById);
router.post('/', validatePost, postsController.createPost);
router.put('/:id', validatePost, postsController.updatePostId);
router.delete('/:id', postsController.deletePostId);

module.exports = router;
