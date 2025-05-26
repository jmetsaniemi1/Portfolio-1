import React from "react";
import "./blog.css";
import lightModeVideo from "./assets/Images/Videos/lightmode.mp4";
import darkModeVideo from "./assets/Images/Videos/darkmode.mp4";
import GeneratedImage from "./assets/Images/Generated Image.png";

function Blog() {
  // Teeman tunnistus localStoragesta (sama kuin Navigationissa)
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  // Hampurilaisvalikon tila
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="blog-wrapper">
      {/* Taustavideot */}
      <video
        className="background-video light-bg"
        src={lightModeVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: isDarkMode ? 0 : 1, transition: 'opacity 1.2s' }}
      />
      <video
        className="background-video dark-bg"
        src={darkModeVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: isDarkMode ? 1 : 0, transition: 'opacity 1.2s' }}
      />
      {/* Hampurilaisvalikko */}
      <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}> 
        <ul>
          <img src={GeneratedImage} alt="Generated Image" />
          <li>
            <button onClick={() => window.location.href = '/'}>FRONT PAGE</button>
          </li>
          <li>
            <button onClick={() => window.location.href = '/blog'} style={{ fontWeight: 'bold', color: '#ffad06' }}>BLOG</button>
          </li>
          <li>
            <button onClick={() => alert('CV avautuu vain etusivulla!')}>CV</button>
          </li>
          <li>
            <button onClick={() => alert('Calculator avautuu vain etusivulla!')}>CALCULATOR</button>
          </li>
          <li>
            <button onClick={() => alert('WATCH avautuu vain etusivulla!')}>WATCH</button>
          </li>
          <li>
            <button onClick={() => alert('TO-DO avautuu vain etusivulla!')}>TO-DO</button>
          </li>
        </ul>
      </div>
      <nav>
        <button id="theme-switch" onClick={() => {
          const newMode = !isDarkMode;
          setIsDarkMode(newMode);
          localStorage.setItem("theme", newMode ? "dark" : "light");
          if (newMode) document.body.classList.add("darkmode");
          else document.body.classList.remove("darkmode");
        }}>
          <svg
            id="moon-svg"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
            style={{ display: isDarkMode ? "none" : "block" }}
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
          </svg>
          <svg
            id="sun-svg"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
            style={{ display: isDarkMode ? "block" : "none" }}
          >
            <path d="M480.07-386q39.19 0 66.56-27.44Q574-440.87 574-480.07q0-39.19-27.44-66.56Q519.13-574 479.93-574q-39.19 0-66.56 27.44Q386-519.13 386-479.93q0 39.19 27.44 66.56Q440.87-386 480.07-386ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM213-427H27v-106h186v106Zm720 0H747v-106h186v106ZM427-747v-186h106v186H427Zm0 720v-186h106v186H427ZM255.43-630.78 136.91-745.87l74.52-78.22 115.22 116.96-71.22 76.35Zm493.14 494.87L632.35-253.87 704-328.09l119.09 113.96-74.52 78.22ZM631.91-704l113.96-119.09 78.22 74.52-116.96 115.22L631.91-704Zm-496 492.57 117.96-116.22L328.09-256 214.13-136.91l-78.22-74.52ZM480-480Z" />
          </svg>
        </button>
        <div className={`ham-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
      </nav>
      {/* Blogialue */}
      <div className="blog-area">
        <h1 className="blog-title">Sosiaalisen median mahdollisuudet töissä ja vapaa-ajalla YY00DA07-3012 (Oamk Highway 2024-2025)</h1>
        <p className="blog-text">Tähän tulee tekstiä</p>
      </div>
    </div>
  );
}

export default Blog;
