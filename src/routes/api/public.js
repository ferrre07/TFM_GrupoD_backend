const router = require('express').Router();

const PublicController = require('../../controllers/public.controller');

router.get('/', PublicController.getByRating);
router.get('/', PublicController.getByMap);

module.exports = router;