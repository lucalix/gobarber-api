import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send('API is running');
});

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
