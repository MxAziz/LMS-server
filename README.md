# 📚 Library Management System (LMS)

A backend application built with **Express.js**, **TypeScript**, and **MongoDB (via Mongoose)** that allows administrators to manage books and borrowing records efficiently. This system is ideal for educational institutions or small libraries.

---

## ✨ Features

- 📖 Add, update, delete, and retrieve books
- 🔍 Filter and sort books by genre, title, and creation date
- ✅ Schema validation and business logic enforcement
- 🔗 Reference-based borrowing system
- 📉 Copies deduction with availability control (via static methods)
- 📊 Borrowed books summary (using aggregation pipeline)
- 🕒 Timestamps for tracking record creation and updates
- 📦 Scalable code structure with modular separation

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Tools:** ts-node-dev, nodemon, dotenv

---

## 📂 Project Structure

```

📦 src/
├── app/
│   ├── modules/
│   │   ├── book/
│   │   │   ├── book.model.ts
│   │   │   ├── books.controller.ts
│   │   │   ├── book.routes.ts
│   │   │   └── book.interface.ts
│   │   └── borrow-books/
│   │       ├── borrow.model.ts
│   │       ├── borrow.controller.ts
│   │       ├── borrow.routes.ts
│   │       └── borrow.interface.ts
│   └── ...
├── middlewares/
|   └── globalErrorHandler.ts
|
├── config/
│   └── index.ts
├── .env
├── server.ts
└── app.ts


````

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or cloud e.g. MongoDB Atlas)
- VSCode recommended with ESLint and Prettier extensions

---

### ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/MxAziz/LMS-server.git
cd LMS-server
````

2. **Install Dependencies**

```bash
npm install
```

3. **Environment Configuration**

Create a `.env` file in the root with the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-management
```

> 🔐 You can rename and customize `.env.example` if present.

4. **Run the Project in Dev Mode**

```bash
npm run dev
```

5. **Build for Production**

```bash
npm run build
```

6. **Start the Production Server**

```bash
npm start
```

---

## 📫 API Endpoints Overview

### 📚 Book Routes

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/books`         | Create a new book           |
| GET    | `/api/books`         | Get all books (filter/sort) |
| GET    | `/api/books/:BookId` | Get book by ID              |
| PUT    | `/api/books/:BookId` | Update a book               |
| DELETE | `/api/books/:BookId` | Delete a book               |

### 📦 Borrow Routes

| Method | Endpoint      | Description                        |
| ------ | ------------- | ---------------------------------- |
| POST   | `/api/borrow` | Borrow a book                      |
| GET    | `/api/borrow` | Borrowed books summary (aggregate) |

---

## 🧪 Testing (Using Postman)

Use the provided Postman collection or test manually using:

* `localhost:5000/api/books`
* `localhost:5000/api/borrow`

---

## ✅ Future Improvements

* Admin authentication
* Book return feature
* Fine calculation
* Swagger API docs
* Frontend integration with Next.js

---

## 🤝 Contribution

Feel free to fork this repo and contribute via pull requests.

---

## 📄 License

MIT License — free to use and modify.
