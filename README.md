<!-- # OAuth2 Web App with Google Authentication

## 🚀 Project Overview
This is an **OAuth2-based authentication system** using **Google OAuth** in a **Node.js + Express.js** web app. Users can log in via Google, view a protected route, and log out securely.

## 📌 Features
- Google OAuth2 authentication with **Passport.js**
- Session-based authentication using **express-session**
- Protected routes accessible **only after login**
- Simple UI with **EJS templates & Bootstrap**

---

## 🛠️ Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-repo/oauth2-app.git
cd oauth2-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root folder:
```ini
PORT=5000
SESSION_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

- Replace `your_google_client_id` and `your_google_client_secret` with actual credentials from **Google Cloud Console**.

---

## 🚦 Usage
### Start the server
```bash
npm start
```
The app runs at **`http://localhost:5000`**

### 🔐 Authentication Flow
1. Visit `/` and click **Login with Google**.
2. Authenticate via Google.
3. After successful login, you are redirected to `/protected`.
4. Logout by visiting `/logout`.

---

## 📂 Project Structure
```
/oauth2-app
│── /views          # EJS templates (UI)
│── /public         # CSS and static assets
│── index.js        # Main server file
│── auth.js         # Passport authentication setup
│── .env            # Environment variables
│── package.json    # Dependencies & scripts
```

---

## 🔧 API Endpoints
| Method | Route            | Description                   |
|--------|----------------|-------------------------------|
| GET    | `/`            | Home page with login button  |
| GET    | `/auth/google` | Initiates Google OAuth flow  |
| GET    | `/google/callback` | Handles Google OAuth callback |
| GET    | `/protected`   | Protected route (requires login) |
| GET    | `/logout`      | Logs out user & destroys session |

---

## 🛠️ Technologies Used
- **Node.js** + **Express.js**
- **Passport.js** (Google OAuth)
- **Express-session** (Session management)
- **EJS** (Templating engine)
- **Bootstrap** (UI Styling)

---

## 📝 Notes
- Ensure **Google OAuth Credentials** are set up in **Google Cloud Console**.
- Use `SESSION_SECRET` for secure session handling.
- In production, enable **HTTPS** and set `cookie.secure: true` in `session()`.

---

## 📜 License
This project is **open-source** under the [MIT License](LICENSE).

---

## 🎯 Contributing
Feel free to submit **issues & pull requests** to improve the project!

📩 **Need help?** Contact me at [vvkam04@gmail.com](vvkam04@gmail.com) 🚀 -->
