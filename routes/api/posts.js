const express = require('express');
const router = express.Router();

// @route GET api/auth/test
// @desc Tests auth route
// @access Private
router.get('/test', (req, res) =>
  res.json({
    msg: 'posts works'
  })
);

module.exports = router;
