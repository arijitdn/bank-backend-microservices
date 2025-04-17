import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { config } from './config';
import logger from './config/logger';

const app = express();

app.use(helmet());
app.use(cors());

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.debug(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  logger.warn(`Resource not found: ${req.method} ${req.url}`);
  res.status(404).json({
    message: 'Resource not found',
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    message: 'Internal Server Error',
  });
});

// Start server
const startServer = () => {
  try {
    app.listen(config.PORT, () => {
      logger.info(`${config.SERVICE_NAME} running on port ${config.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
