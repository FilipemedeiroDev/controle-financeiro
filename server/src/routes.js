const { Router } = require('express');
const TransactionsController = require('./controllers/TransactionsController');
const UsersController = require('./controllers/UsersController');
const authentication = require('./middlewares/auth')

const routes = Router();

routes.post('/users', UsersController.Create);
routes.post('/users/login', UsersController.Login);
routes.post('/users/forgot', UsersController.Forgot);
routes.post('/users/reset/:code', UsersController.Reset);
routes.put('/users', authentication, UsersController.Edit);
routes.get('/users/me', authentication, UsersController.GetUser);

routes.get('/transactions',authentication, TransactionsController.List);
routes.post('/transactions', authentication, TransactionsController.Register)
routes.delete('/transactions/:id', authentication, TransactionsController.Delete)

routes.get('/transactions/summaries', authentication, TransactionsController.Summary)

module.exports = routes;