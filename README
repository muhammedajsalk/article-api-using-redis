## 🚀 Article API – Node.js + Express + TypeScript + MongoDB + Redis Cache

### A clean, modular, and scalable REST API built with:

Node.js + Express + TypeScript

MongoDB + Mongoose

Redis Caching (Windows Supported)

Joi Validation

Centralized Error Handling

Service Layer Architecture

### Perfect for learning:

✔ Redis caching logic

✔ Cache invalidation patterns

✔ Clean folder structure (MVC + Service)

✔ Real-world CRUD API design


### ⚙️ Installation & Setup
#### 1️⃣ Clone the Repository

git clone https://github.com/your-username/article-api.git

cd article-api

#### 2️⃣ Install Dependencies
npm install

#### 3️⃣ Environment Setup (.env)

Create a .env file:

PORT=3000

MONGO_URI=mongodb://127.0.0.1:27017/article-api

REDIS_URL=redis://127.0.0.1:6379

#### 4️⃣ Install MongoDB

Download MongoDB Community Server:

👉 https://www.mongodb.com/try/download/community

Start MongoDB service (Windows):

net start MongoDB

#### 5️⃣ Install Redis (Windows MSI Installer)

Download Redis for Windows:

👉 https://github.com/tporadowski/redis/releases

Check Redis is running:

redis-cli ping


Expected output:

PONG


Start Redis manually:

redis-server


Or start Redis Windows service:

net start redis

#### 6️⃣ Start Development Server
npm run dev

#### 7️⃣ Build for Production
npm run build

npm start

📡 API Endpoints

Base URL
http://localhost:3000/api/articles

#### 📌 GET All Articles (Cached)

GET /api/articles


Redis cache TTL: 30 seconds

#### 📌 GET Article by ID (Cached)

GET /api/articles/:id


TTL: 60 seconds

Cache invalidates on update/delete

#### 📌 POST Create Article
POST /api/articles

Body:
{
  
  "title": "Redis Caching in Node.js",

  "content": "Redis helps speed up applications by caching frequently accessed data."

}

#### 📌 PUT Update Article
PUT /api/articles/:id

#### 📌 DELETE Article
DELETE /api/articles/:id


Cache invalidation happens automatically.

### ⚡ Redis Caching Logic

✔ Cache GET all articles

✔ Cache GET article by ID

✔ Automatic cache invalidation on POST/PUT/DELETE

✔ Custom TTL support

✔ Redis helper utilities

### 🧪 Dummy Data for Testing

#### Use this in Postman:

{

  "title": "Understanding JavaScript Closures",

  "content": "A closure gives access to outer scope variables from an inner function."

}

### 🧱 Tech Stack

Node.js + Express =	Backend framework

TypeScript =	Type safety

MongoDB =	Database

Mongoose = ODM

Redis =	Caching

Joi =	Request validation

MVC + Services =	Clean architecture

🐞 Error Handling Included

Global error handler

Joi validation errors

MongoDB validation errors

Async wrapper (catchAsync)

### 🎯 Useful Redis Commands

#### Check all keys:

redis-cli keys *


#### Delete a specific key:

redis-cli del articles:all


#### Flush all cache (WARNING):

redis-cli flushall

#### 🤝 Contribution

Feel free to fork the project and submit PRs.
