import pino from 'pino-http';
import cors from 'cors';

import express from 'express';

export const startServer = () => {
    const PORT = 3000;
    const app = express();

    app.use(cors());

    app.use(
      pino({
        transport: {
          target: `pino-pretty`,
        },
      }),
    );

    app.get('/', (req, res) => {
      res.json({
        message: 'Get',
      });
    });

    app.use('', (req, res, next) => {
      res.status(404).json({
        message: 'Route not found',
      });
    });

    app.use((err, req, res, next) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: err.message,
      });
    });

    app.listen(PORT, () => {
      console.log(`Start server on port ${PORT}`);
    });
}
