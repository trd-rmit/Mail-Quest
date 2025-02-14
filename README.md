# Mail-Quest

Mail-Quest is a full-stack web application that provides a secure and efficient email management system with Google OAuth authentication. The application allows users to manage their surveys and track survey responses sent via email.
This project was created to test the integration of the Google OAuth, Stripe API and SendGrid API (additionally atlas MongoDB).

## Tech Stack

### Frontend
- React.js
- Redux
- Redux Form
- Material-UI
- Axios
- React Router
- React Stripe Checkout
- lodash

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Google OAuth, Cookie Session)
- SendGrid API
- Stripe API
- lodash

## Prerequisites

Before running the application, ensure you have:
- Node.js (v20 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- Google Cloud Platform account
- SendGrid account
- Stripe account

## Required API Keys

Create `.env` file in the root directory and `.env.development` in the client directory with the following variables:

### Server (.env)

NODE_GOOGLE_CLIENT_ID=your_google_client_id (oauth credentials)
NODE_GOOGLE_CLIENT_SECRET=your_google_client_secret (oauth credentials)
NODE_MONGODB_URL=your_mongodb_url (local or atlas)
NODE_COOKIE_SECRET=your_random_text_for_cookie_session (used for cookies encryption)
NODE_STRIPE_SECRET_KEY=your_stripe_secret_key (stripe credentials)
NODE_SENDGRID_API_KEY=your_sendgrid_secret_api_key (sendgrid credentials)

### Client (.env.development)

REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key (stripe credentials)

## Installation

1. Clone the repository:

git clone https://github.com/trd-rmit/Mail-Quest.git
cd Mail-Quest

2. Install dependencies for both server and client:

npm i # Install server dependencies
cd client
npm i # Install client dependencies (add --legacy-peer-deps if you encounter peer dependency issues)
cd ..

3. Start the development server:

npm run dev       # Starts both client and server using concurrently

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
