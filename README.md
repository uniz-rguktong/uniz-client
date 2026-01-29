# 🎓 uniZ Web Client

> **The Operating System for Modern Universities**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8.svg)](https://tailwindcss.com/)

**uniZ Web** is the premium, high-performance frontend interface for the uniZ ecosystem. It provides a seamless, role-based experience for students, faculty, and administrators, wrapped in a stunning, modern aesthetic featuring glassmorphism and fluid animations.

---

## ✨ Key Features

- **🎭 Role-Based Dashboards**: Tailored interfaces for Students, Faculty, and Admins.
- **📱 Responsive Design**: optimized for desktops, tablets, and mobile devices.
- **⚡ Real-Time Updates**: Instant notifications and live data reflection via WebSockets.
- **🎨 Premium UI/UX**: Built with TailwindCSS for a sleek, modern, and accessible design.
- **📊 Data Visualization**: Interactive charts for attendance, grades, and academic focus.
- **🔐 Secure Authentication**: JWT-based session management with secure route protection.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: [Recoil](https://recoiljs.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

Verified industry-standard architecture for scalability and maintainability.

```bash
uniz-web/
├── src/
│   ├── api/            # API endpoints and service calls
│   ├── assets/         # Static assets (images, svg)
│   ├── components/     # Reusable UI components (Atomic design)
│   │   ├── ui/         # Base UI primitives
│   ├── hooks/          # Custom React hooks
│   ├── layout/         # Layout wrappers (Sidebar, Navbar)
│   ├── pages/          # Route-based page components
│   │   ├── admin/      # Administration modules
│   │   ├── auth/       # Authentication screens
│   │   ├── faculty/    # Faculty tools
│   │   ├── student/    # Student dashboard & features
│   ├── store/          # State management (Atoms/Selectors)
│   ├── types/          # TypeScript interface definitions
│   ├── utils/          # Helper functions and formatting utilities
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── public/             # Public static files
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts      # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uniz-rguktong/uniz-web.git
   cd uniz-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000
   VITE_WS_URL=ws://localhost:3000
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by the uniZ Team
</p>
