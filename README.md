# Backend Backend - Production Ready with Microservices

NOTE: This is still in Development Stage

A banking application built with microservices architecture.

## 🚀 Services Overview

### Core Services

| Service Name        | Port | Description                    |
| ------------------- | ---- | ------------------------------ |
| API Gateway         | 3000 | Entry point for all requests   |
| Auth Service        | 3001 | Authentication & authorization |
| Account Service     | 3002 | Account management             |
| Transaction Service | 3003 | Transaction processing         |

### Supporting Services

| Service Name | Port | Description                |
| ------------ | ---- | -------------------------- |
| Redis        | 6379 | Cache & session management |
| Redis UI     | 8001 | Redis management interface |
| Kafka UI     | 8080 | Kafka management interface |

## 🛠️ Tech Stack

- Node.js
- TypeScript
- Express.js
- Redis
- Microservices Architecture
