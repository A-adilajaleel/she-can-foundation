# She Can Foundation - Full Stack Contact Management System

## 📌 Project Overview

This project was developed as part of a Full Stack Development Internship Task for She Can Foundation.

The application allows users to submit contact details and messages through a responsive contact form. Submitted data is stored in a database and can be managed through the Django Admin Panel.

---

## 🚀 Features

### Frontend Features

* Contact Form
* Name Field
* Email Field
* Message Field
* Responsive Design
* Form Validation
* Success Message Display

### Backend Features

* Django REST Framework API
* Contact Form Submission Endpoint
* Server-side Validation
* JSON API Responses

### Database Features

* SQLite Database Integration
* Automatic Data Storage

### Admin Features

* Django Authentication
* Admin Login
* View Contact Submissions
* Manage Contact Records

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS

### Backend

* Django
* Django REST Framework
* django-cors-headers

### Database

* SQLite3

---

## 📂 Project Structure

```text
she-can-foundation/

├── backend/
│   ├── core/
│   │   ├── contact/
│   │   │   ├── migrations/
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   │
│   │   ├── core/
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   ├── asgi.py
│   │   │   └── wsgi.py
│   │   │
│   │   ├── db.sqlite3
│   │   └── manage.py
│   │
│   └── venv/
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
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

### 2️⃣ Backend Setup

```bash
cd backend/core

python -m venv venv

venv\Scripts\activate

pip install django
pip install djangorestframework
pip install django-cors-headers

python manage.py migrate

python manage.py runserver
```

Backend will run at:

```text
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

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

## 🔐 Admin Panel

Admin Dashboard:

```text
http://127.0.0.1:8000/admin
```

Features:

* Secure Login
* View Submitted Contacts
* Search Contacts
* Manage Records

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

✅ APIs

✅ Form Validation

✅ Responsive Design

✅ Backend Features

---

## 👩‍💻 Developed By

**Adila Jaleel**

Full Stack Development Internship Submission for She Can Foundation.
