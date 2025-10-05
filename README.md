# AniRush 🎬

A modern, free anime streaming web application built with React and Vite. AniRush provides a seamless anime watching experience by utilizing third-party APIs to deliver high-quality anime content.

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🎥 **Free Anime Streaming** - Watch your favorite anime without any subscription
- 🔍 **Search Functionality** - Find anime quickly and easily
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Modern UI** - Clean interface powered by Tailwind CSS
- 📊 **State Management** - Efficient data handling with Redux Toolkit
- 🎬 **HLS Streaming** - High-quality adaptive streaming support

## 🚀 Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.6
- **State Management:** Redux Toolkit 2.8.1
- **Routing:** React Router DOM 7.6.0
- **HTTP Client:** Axios 1.9.0
- **Video Streaming:** HLS.js 1.6.2
- **Analytics:** Vercel Analytics 1.5.0

## 📋 Prerequisites

Before running AniRush locally, make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher) or **yarn**
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KarlAngeloFlores/anirush.git
cd anirush
```

### 2. Install Dependencies

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start running on `http://localhost:5173` (default Vite port).

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Configuration

### Environment Variables

If your project uses API keys or configuration settings, create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_PROXY_URL=your_proxy_m3u8_url_here
```

> **Note:** Remember to add `.env` to your `.gitignore` file to keep sensitive information secure.

## 🚀 Building for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory. You can preview the production build locally:

```bash
npm run preview
```

## ⚠️ Disclaimer

AniRush is a streaming platform that uses third-party APIs. This project is for educational purposes only. Please ensure you comply with copyright laws and the terms of service of the APIs being used.

## 👨‍💻 Author

**Karl Angelo Flores**
- GitHub: [@KarlAngeloFlores](https://github.com/KarlAngeloFlores)

## 🙏 Acknowledgments

- Thanks to all third-party API providers
- React and Vite communities for excellent documentation

---

⭐ If you like this project, please consider giving it a star on GitHub!

**Made with ❤️ by Karl Angelo Flores**
