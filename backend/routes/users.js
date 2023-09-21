const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUserId,
  updateUser,
} = require('../controllers/users');

router.get('/me', getCurrentUserId);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email(),
      name: Joi.string().min(2).max(30),
    }),
  }),
  updateUser,
);

module.exports = router;
