import {Router} from 'express';
import userAuthenticated from '../middlewares/userAuthenticated';
import PixController from '../resources/pix/pix.controller';

const pixRouter = Router();

const pixController = new PixController();

pixRouter.use(userAuthenticated);

pixRouter.post('/request', pixController.request);
pixRouter.post('/pay:key', pixController.pay);
pixRouter.get('/transacations', pixController.transactions);

export default pixRouter;