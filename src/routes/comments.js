const express = require('express')
const router = express.Router()

const CommentController = require('../controllers/commentController')

router.get('/:id', CommentController.listByPostId)
router.post('/', CommentController.saveComment)

module.exports = router
