"use client"
import './home.scss'; // Reusing the same stylesheet
import Navigation from './components/navigation';

export default function NotFound() {
  return (
    <div className="home-page">
      <div className="bg-animation"></div>

      <main className="main-content">
        <h1 className="page-title">
          Oops, <span>404</span>
        </h1>

        <p className="page-subtitle">
          Only these pages exist 👇🏻
        </p>

        <Navigation />
      </main>
    </div>
  );
}