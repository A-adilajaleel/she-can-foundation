# 🌸 She Can Foundation – Full Stack Contact Management System

## 📖 Overview

She Can Foundation Contact Management System is a full-stack web application developed as part of a Full Stack Development Internship Task.

The application allows users to submit their contact details and messages through a responsive contact form. Submitted information is securely stored in a database and can be managed through the Django Admin Dashboard.

---

## 🚀 Live Website

🔗 https://she-can-foundation-sepia.vercel.app/

---

## ✨ Features

### Frontend Features

* Responsive Contact Form
* Real-Time Form Validation
* Success Message Display
* Mobile-Friendly Design
* Modern User Interface

### Backend Features

* Django REST Framework API
* Contact Form Submission Endpoint
* Server-Side Validation
* JSON-Based API Responses

### Database Features

* SQLite Database Integration
* Automatic Data Storage
* Persistent Contact Records

### Admin Dashboard

* Secure Authentication
* Contact Management
* View User Submissions
* Search and Manage Records

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS

### Backend

* Django
* Django REST Framework
* django-cors-headers
* Gunicorn

### Database

* SQLite3

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```text
she-can-foundation/

├── backend/
│   └── core/
│       ├── contact/
│       ├── core/
│       ├── manage.py
│       ├── requirements.txt
│       └── db.sqlite3
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ContactForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/A-adilajaleel/she-can-foundation.git
```

### Backend Setup

```bash
cd backend/core

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🌐 API Endpoint

### Submit Contact Form

```http
POST /api/contact/
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello She Can Foundation"
}
```

### Response

```json
{
  "success": true,
  "message": "Form submitted successfully!"
}
```

---

## 🔐 Admin Dashboard

Admin Panel Access:

```text
http://127.0.0.1:8000/admin
```

### Admin Features

* Secure Login Authentication
* View Contact Submissions
* Manage Contact Records
* Search User Entries
* Monitor Submitted Messages

---

## 🎯 Internship Requirements Covered

### Basic Requirements

✅ Name Field

✅ Email Field

✅ Message Field

✅ Submit Button

✅ Form Submitted Successfully

### Experienced Features

✅ Database Integration

✅ Authentication

✅ Admin Panel

✅ REST APIs

✅ Form Validation

✅ Responsive Design

✅ Backend Features

✅ Deployment (Vercel & Render)

---

## 👩‍💻 Developed By

**Adila Jaleel**

B.Tech Computer Science Graduate
Full Stack Development Internship Submission

---


