import express from 'express';

const routes = express.Router();

import Proffy from './controllers/ProffyController';
import Connections from './controllers/ConnectionsController';

routes.post('/users', Proffy.createUser);

routes.get('/classes', Proffy.index);

routes.post('/classes', Proffy.create);

routes.post('/connections', Connections.create);

routes.get('/connections', Connections.index);

export default routes;