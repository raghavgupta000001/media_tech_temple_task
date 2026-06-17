# Media Tech Temple Task

[**View Live Demo**](https://media-tech-temple-task.vercel.app/)

A pixel-perfect, mobile-first web application built with Next.js and Tailwind CSS. This project translates a comprehensive Figma UI design into a fully functional React architecture with state-driven dynamic rendering and iOS-style interactive elements.

## 🚀 Features

* **Responsive Mobile Constraints:** Hard-coded maximum width (`max-w-[430px]`) and overflow handling to simulate a native mobile application environment on desktop browsers.
* **Component-Driven Architecture:** Clean separation of concerns using reusable React components for repetitive UI elements (e.g., Settings Lists, Action Modals, Toggle Switches).
* **Stateful Interactions:**
  * Custom-built iOS-style Action Sheets (Bottom Sheets) using React `useState`.
  * Dynamic conditional rendering to swap views without triggering full page reloads.
  * Interactive, animated toggle switches.
* **Modern Routing:** Next.js `app` directory routing combined with URL hash targeting (`/#settings`) to seamlessly navigate between deep links and maintain the UI state.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Deployment:** Vercel

## 📦 Getting Started

Follow these steps to set up the project locally on your machine:

### 1. Clone the repository
```bash
git clone [https://github.com/raghavgupta000001/media_tech_temple_task.git](https://github.com/raghavgupta000001/media_tech_temple_task.git)
cd media_tech_temple_task
