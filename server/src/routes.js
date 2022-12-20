const { Router } = require('express');
const UsersController = require('./controllers/UsersController');

const routes = Router();

routes.post('/users', UsersController.Create)
routes.post('/users/login', UsersController.Login)
routes.post('/users/forgot', UsersController.Forgot)
routes.post('/users/reset/:code', UsersController.Reset)


module.exports = routes;