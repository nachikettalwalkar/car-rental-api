import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { signup, signin } from './handlers/user';
import { responseFormatter } from './middleware/responseFormatter';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(responseFormatter);
app.use(express.urlencoded({extended: true}));

app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});

app.post('/user', signup)
app.post('/signin', signin)

app.use('/api', protect, router)

app.use(errorHandler)

export default app;
