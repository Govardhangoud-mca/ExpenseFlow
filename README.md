# 💰 ExpenseFlow - Full Stack Expense Management System

A modern full-stack Expense Management System built using **React (TypeScript)**, **Spring Boot**, and **MySQL**. The application enables users to create, manage, and track expenses through a structured approval workflow.

---

## 📖 Overview

ExpenseFlow is designed to simplify expense tracking and management. Users can create and submit expenses, while administrators can review, approve, or reject requests. The application demonstrates full-stack development concepts including REST APIs, database integration, layered architecture, and responsive UI design.

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Material UI (MUI)
* Axios
* React Router DOM

### Backend

* Spring Boot
* Spring Data JPA
* MySQL
* REST APIs
* Swagger/OpenAPI

### Database

* MySQL

---

## 📁 Project Structure

```text
expense-flow/
│
├── expense-flow-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── api/
│   │   └── types/
│
└── expense-flow-backend/
    ├── config/
    ├── controller/
    ├── dto/
    ├── entity/
    ├── enums/
    ├── exception/
    ├── repository/
    └── service/
```


```text
expense-flow-backend/
│
├── src/
├── build.gradle
├── settings.gradle
├── gradlew
├── gradlew.bat
└── ...

---

## 🏗️ Architecture

### Backend Architecture

```text
Controller → Service → Repository → Database
```

### Frontend Architecture

```text
Components → Pages → Services → API → Backend
```

This layered architecture ensures clean code organization, maintainability, and scalability.

---

## ✨ Features

### 💸 Expense Management

* Create new expenses
* Update expense details
* View expense history
* Upload receipts (optional)

### 🔄 Approval Workflow

* Draft
* Submitted
* Approved
* Rejected

### 📊 Dashboard

* Expense summary
* Status overview
* Quick statistics

### 📋 Expense Listing

* Paginated expense table
* Status indicators
* Approval and rejection actions

### 🌐 API Documentation

* Interactive Swagger UI
* Easy API testing and validation

---

## 📸 Screenshots

### Dashboard

![Dashboard](https://drive.google.com/file/d/1u_ng-QAxRDDYDNzKvdc5Iz2m_MRv-ava/view?usp=sharing)

### Create Expense

![Create Expense](https://drive.google.com/file/d/1WviW4VqC8svHaVCgZY_OxUHY3rA88wBL/view?usp=sharing)

### Expense List

![Expense List](https://drive.google.com/file/d/1l0zgx-hZ7sD031852WBrOFfxGJuVcSIG/view?usp=sharing)

### Approval Workflow


> 

---

## 🎥 Demo Video

Project Demo:👉🙌🧡🧡

[▶ Watch Demo Video](https://drive.google.com/file/d/1vIN4P41pBx__cW-OCXWpSDn4zzkOQEpV/view?usp=sharing)

>

---

## ⚙️ Prerequisites

Before running the project, ensure the following are installed:

* Java 17+
* Node.js 18+
* MySQL 8+
* Gradle (or Gradle Wrapper)
* Git
* Spring(STS)

---

## 🚀 Backend Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Backend

```bash
cd expense-flow-backend
```

### Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_db
spring.datasource.username=root
spring.datasource.password=your_password
```

### Run Application

```bash
gradlew bootRun
```

Backend runs on:

```text
http://localhost:8080
```

---

## 🚀 Frontend Setup

### Navigate to Frontend

```bash
cd expense-flow-frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🌐 API Documentation

Swagger UI:

```text
http://localhost:8080/swagger-ui/index.html
```

---

## 🔄 Expense Workflow

```text
Draft
  ↓
Submitted
  ↓
Approved / Rejected
```

---

## 🚀 Key Highlights

* Full-Stack Application Development
* React + TypeScript Frontend
* Spring Boot REST APIs
* MySQL Database Integration
* Swagger API Documentation
* Clean Layered Architecture
* Responsive User Interface
* Expense Approval Workflow
* Pagination Support
* Real-World Project Structure

---

## 🔮 Future Enhancements

* User Authentication & Authorization
* Role-Based Access Control
* Email Notifications
* Expense Analytics Dashboard
* PDF/Excel Export
* Advanced Search & Filtering

---

## 👨‍💻 Author

**Govardhan Goud**

Full Stack Developer (React + Spring Boot)

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ Project Status

Completed as a Full-Stack Expense Management System project demonstrating modern web application development using React, Spring Boot, REST APIs, and MySQL.
