# Mail-Quest

> **A full-stack web application for secure and efficient email survey management with Google OAuth authentication.**

Mail-Quest enables users to manage surveys and track responses via email. This project showcases the integration of **Google OAuth, Stripe API, SendGrid API, and MongoDB Atlas**.

---

## 🚀 Tech Stack

### **Frontend**  
- ⚛️ **React.js**  
- 🗂 **Redux & Redux Form**  
- 🎨 **Material-UI**  
- 🔗 **Axios & React Router**  
- 💳 **React Stripe Checkout**  
- 🔢 **lodash**

### **Backend**  
- 🛠 **Node.js & Express.js**  
- 🗄 **MongoDB & Mongoose**  
- 🔐 **Passport.js (Google OAuth & Cookie Session)**  
- ✉️ **SendGrid API**  
- 💰 **Stripe API**  
- 🔢 **lodash**

---

## ⚙️ Prerequisites

Before running the application, ensure you have the following installed:

- 📌 **Node.js (v20 or higher)**
- 📌 **MongoDB (Local or Atlas Account)**
- 📌 **Google Cloud Platform Account**
- 📌 **SendGrid Account**
- 📌 **Stripe Account**

---

## 🔑 Required API Keys

Create the following environment variable files:

### **Server (`.env`)**
```ini
NODE_GOOGLE_CLIENT_ID=your_google_client_id
NODE_GOOGLE_CLIENT_SECRET=your_google_client_secret
NODE_MONGODB_URL=your_mongodb_url
NODE_COOKIE_SECRET=your_random_text_for_cookie_session
NODE_STRIPE_SECRET_KEY=your_stripe_secret_key
NODE_SENDGRID_API_KEY=your_sendgrid_secret_api_key
```

### **Client (`.env.development`)**
```ini
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

## 📦 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/trd-rmit/Mail-Quest.git
cd Mail-Quest
```

### **2️⃣ Install Dependencies**
#### **For Server**
```sh
npm i
```
#### **For Client**
```sh
cd client
npm i # Use --legacy-peer-deps if needed
cd ..
```

### **3️⃣ Start the Development Server**
```sh
npm run dev  # Starts both client and server using concurrently
```

---

## 🌍 URLs

- **Frontend:** [http://localhost:3000](http://localhost:3000)  
- **Backend:** [http://localhost:5000](http://localhost:5000)  

---

## 🎯 Features

✅ **Google OAuth Authentication**  
✅ **Stripe Payments Integration**  
✅ **SendGrid Email Service**  
✅ **Survey Response Tracking**  
✅ **MongoDB for Data Storage**  
✅ **React & Redux for UI State Management**  

Happy Coding! 🚀
