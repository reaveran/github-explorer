# Github Explorer

![Github Explorer](https://your-image-url.com/logo.png)

Github Explorer is github username search application built using **React** and **Vite**. This application allows users to search github user by username and view their repositories. It leverages React for the front-end framework and utilizes React Router for navigation. The project is structured efficiently to maintain scalability and maintainability.

Available in https://reaveran.github.io/github-explorer/
Note: On https://reaveran.github.io/github-explorer/ it doesn't use any token so there will be request limit 60 request/hour.

## 🚀 Tech Stack

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast build tool optimized for modern web development.
- **TypeScript** - For type-safe development.
- **React Router** - For handling routing in the application.
- **React Query** - For efficient data fetching and caching.
- **Axios** - For making API requests.
- **ESLint & Prettier** - For code linting and formatting.
- **Tailwind CSS** - A utility-first CSS framework.
- **Vitest & Testing Library** - For unit and integration testing.

## 📂 Project Structure

```bash
src/
│── __test__/         # Mock test data and setup
│── @types/           # TypeScript type definitions
│── apis/             # API request logic using Axios
│── assets/           # Static assets (images, icons, fonts)
│── components/       # Reusable UI components
│── hooks/            # Custom React hooks
│── modules/          # Feature-specific logic and utilities
│── navigation/       # React Router configuration
│── pages/home/       # Home page for searching github username
│── utils/            # Utility functions and helper methods
│── App.tsx           # Root component
│── main.tsx          # Application entry point
```

## 🛠 Installation & Setup

📌 Minimum Node.js Version

Ensure you have Node.js v18 or higher installed before proceeding.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/reaveran/github-explorer.git
   cd github-explorer
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create .env based on .env.example:**

   ```sh
   # On Unix-based systems (Linux/MacOS)
   cp .env.example .env

   # On Windows
   copy .env.example .env
   ```

   Please fill VITE_API_TOKEN with your github token

4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```
6. **Run tests:**
   ```sh
   npm run test
   ```

## 📜 License

This project is licensed under the **MIT License**.
