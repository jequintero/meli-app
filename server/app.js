import path from 'path';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { renderServerSideApp } from './renderServerSideApp';
import productRoutes from './api';

const { PUBLIC_URL = '' } = process.env;

// This export is used by initialization code in /scripts
export const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

// Serve generated assets
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../build'), {
    maxage: Infinity
  })
);

// Serve static assets in /public
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../public'), {
    maxage: '30 days'
  })
);

app.use(morgan('tiny'));

app.use(productRoutes);

app.use(renderServerSideApp);
