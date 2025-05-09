import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import lightModeVideo from "./assets/Images/Videos/lightmode_background_transition-2.mp4";
import darkModeVideo from "./assets/Images/Videos/darkmode_background_transition-2.mp4";
import GeneratedImage from "./assets/Images/Generated Image.png"; 

function Navigation({ onProjectsClick }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const loginModalRef = useRef(null);
  const cvModalRef = useRef(null);
  const dayToNightVideoRef = useRef(null);
  const nightToDayVideoRef = useRef(null);
  const offScreenMenuRef = useRef(null);

  // Debug: Tarkista videoreferenssit ja DOM
  useEffect(() => {
    console.log("dayToNightVideoRef.current:", dayToNightVideoRef.current);
    if (dayToNightVideoRef.current) {
      console.log("DayToNight src:", dayToNightVideoRef.current.currentSrc);
      console.log("DayToNight in DOM:", document.getElementById("dayToNight"));
    }
    console.log("nightToDayVideoRef.current:", nightToDayVideoRef.current);
    if (nightToDayVideoRef.current) {
      console.log("NightToDay src:", nightToDayVideoRef.current.currentSrc);
      console.log("NightToDay in DOM:", document.getElementById("nightToDay"));
    }
  }, []);

  // Teeman alustus ja videoiden latauksen varmistus
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Saved theme:", savedTheme);

    const setupVideo = (videoRef, setTimeToEnd, name) => {
      if (videoRef.current) {
        console.log(`${name} video exists`);
        videoRef.current.pause();
        const onLoadedMetadata = () => {
          console.log(`${name} loadedmetadata, duration:`, videoRef.current.duration);
          if (setTimeToEnd) {
            videoRef.current.currentTime = videoRef.current.duration || 0;
            console.log(`${name} currentTime set to:`, videoRef.current.currentTime);
          }
        };
        const onLoadedData = () => {
          console.log(`${name} loadeddata, readyState:`, videoRef.current.readyState);
        };
        const onCanPlay = () => {
          console.log(`${name} canplay, networkState:`, videoRef.current.networkState);
        };
        const onError = (e) => {
          console.error(`${name} video error:`, e);
          console.log(`${name} networkState:`, videoRef.current.networkState);
        };
        videoRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
        videoRef.current.addEventListener("loadeddata", onLoadedData);
        videoRef.current.addEventListener("canplay", onCanPlay);
        videoRef.current.addEventListener("error", onError);
        return () => {
          videoRef.current.removeEventListener("loadedmetadata", onLoadedMetadata);
          videoRef.current.removeEventListener("loadeddata", onLoadedData);
          videoRef.current.removeEventListener("canplay", onCanPlay);
          videoRef.current.removeEventListener("error", onError);
        };
      } else {
        console.warn(`${name} video ref not found`);
      }
    };

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("darkmode");
      setupVideo(dayToNightVideoRef, true, "DayToNight");
      setupVideo(nightToDayVideoRef, false, "NightToDay");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("darkmode");
      setupVideo(nightToDayVideoRef, true, "NightToDay");
      setupVideo(dayToNightVideoRef, false, "DayToNight");
    }
  }, []);

  // Lataa käyttäjä localStoragesta kun komponentti ladataan ja tarkista tokenin voimassaolo
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      const now = Date.now() / 1000; // sekunteina
      if (userObj.exp && userObj.exp < now) {
        setUser(null);
        localStorage.removeItem('user');
      } else {
        setUser(userObj);
      }
    }
  }, []);

  // Teeman vaihto
  const toggleTheme = () => {
    console.log("toggleTheme called, isDarkMode:", isDarkMode);
    const keyboard = document.querySelector(".keyboard");
    if (keyboard) {
      console.log("Keyboard element found, adding animation");
      keyboard.classList.add("theme-switch-animation");
      keyboard.addEventListener(
        "animationend",
        () => {
          keyboard.classList.remove("theme-switch-animation");
        },
        { once: true }
      );
    } else {
      console.warn("Keyboard element not found");
    }

    if (!isDarkMode) {
      // Vaihdetaan valoisasta tummaan
      console.log("Switching to dark mode");
      if (dayToNightVideoRef.current) {
        console.log("DayToNight video before play:", {
          src: dayToNightVideoRef.current.currentSrc,
          currentTime: dayToNightVideoRef.current.currentTime,
          paused: dayToNightVideoRef.current.paused,
          readyState: dayToNightVideoRef.current.readyState,
          networkState: dayToNightVideoRef.current.networkState,
        });
        dayToNightVideoRef.current.currentTime = 0;
        dayToNightVideoRef.current.play().then(() => {
          console.log("DayToNight video playing");
        }).catch((error) => {
          console.error("DayToNight video play failed:", error);
        });
      } else {
        console.warn("DayToNight video ref not found");
      }
      document.body.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      // Vaihdetaan tummasta valoisaan
      console.log("Switching to light mode");
      if (nightToDayVideoRef.current) {
        console.log("NightToDay video before play:", {
          src: nightToDayVideoRef.current.currentSrc,
          currentTime: nightToDayVideoRef.current.currentTime,
          paused: nightToDayVideoRef.current.paused,
          readyState: nightToDayVideoRef.current.readyState,
          networkState: nightToDayVideoRef.current.networkState,
        });
        nightToDayVideoRef.current.currentTime = 0;
        nightToDayVideoRef.current.play().then(() => {
          console.log("NightToDay video playing");
        }).catch((error) => {
          console.error("NightToDay video play failed:", error);
        });
      } else {
        console.warn("NightToDay video ref not found");
      }
      document.body.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  };

  // Hampurilaisvalikon toggle
  const toggleMenu = () => {
    console.log("Toggling menu, isMenuOpen:", !isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };

  // Sulje valikko, jos klikataan muualle
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        offScreenMenuRef.current &&
        !offScreenMenuRef.current.contains(event.target) &&
        !event.target.closest(".ham-menu")
      ) {
        console.log("Clicked outside, closing menu");
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Modaalin käsittely (div-pohjainen)
  const openLoginModal = () => {
    setIsLoginOpen(true);
    document.body.classList.add('modal-open');
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
    document.body.classList.remove('modal-open');
  };
  const openCvModal = () => {
    setIsCvOpen(true);
    document.body.classList.add('modal-open');
  };
  const closeCvModal = () => {
    setIsCvOpen(false);
    document.body.classList.remove('modal-open');
  };

  // Lomakekäsittelijät
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setLoginError('');
    setLoginSuccess('');
  };
  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    setRegisterError('');
    setRegisterSuccess('');
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');
    if (!loginForm.email || !loginForm.password) {
      setLoginError('Täytä kaikki kentät.');
      return;
    }
    try {
      const res = await fetch('https://portfolio-zvkt.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Kirjautuminen epäonnistui.');
        return;
      }
      setLoginSuccess('Kirjautuminen onnistui!');
      const decoded = parseJwt(data.token);
      const userData = { email: data.email, token: data.token };
      if (decoded && decoded.exp) {
        userData.exp = decoded.exp;
      }
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setLoginForm({ email: '', password: '' });
      setTimeout(() => {
        setIsLoginOpen(false);
        setIsUserModalOpen(true);
        document.body.classList.remove('modal-open');
        document.body.classList.add('modal-open');
      }, 800);
    } catch (err) {
      setLoginError('Virhe palvelinyhteydessä.');
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');
    if (!registerForm.email || !registerForm.password) {
      setRegisterError('Täytä kaikki kentät.');
      return;
    }
    try {
      const res = await fetch('https://portfolio-zvkt.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setRegisterError(data.error || 'Rekisteröinti epäonnistui.');
        return;
      }
      setRegisterSuccess('Rekisteröinti onnistui!');
      setRegisterForm({ email: '', password: '' });
    } catch (err) {
      setRegisterError('Virhe palvelinyhteydessä.');
    }
  };

  // Sulje modaali escillä
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isLoginOpen) closeLoginModal();
        if (isCvOpen) closeCvModal();
        if (isUserModalOpen) closeUserModal();
        if (isDeleteConfirmOpen) closeDeleteConfirm();
      }
    };
    if (isLoginOpen || isCvOpen || isUserModalOpen || isDeleteConfirmOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isLoginOpen, isCvOpen, isUserModalOpen, isDeleteConfirmOpen]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsUserModalOpen(false);
    setIsMenuOpen(false);
    document.body.classList.remove('modal-open');
  };
  const openUserModal = () => {
    setIsUserModalOpen(true);
    document.body.classList.add('modal-open');
  };
  const closeUserModal = () => {
    setIsUserModalOpen(false);
    document.body.classList.remove('modal-open');
  };
  const openDeleteConfirm = () => {
    setIsDeleteConfirmOpen(true);
  };
  const closeDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false);
  };
  const handleDeleteAccount = async () => {
    const now = Date.now() / 1000;
    if (user && user.exp && user.exp < now) {
      setUser(null);
      localStorage.removeItem('user');
      setIsDeleteConfirmOpen(false);
      setIsUserModalOpen(false);
      setIsMenuOpen(false);
      document.body.classList.remove('modal-open');
      alert('Istuntosi on vanhentunut. Kirjaudu uudelleen.');
      return;
    }
    try {
      const res = await fetch('https://portfolio-zvkt.onrender.com/api/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      });
      const data = await res.json();
      if (res.ok) {
        setUser(null);
        localStorage.removeItem('user');
        setIsDeleteConfirmOpen(false);
        setIsUserModalOpen(false);
        setIsMenuOpen(false);
        document.body.classList.remove('modal-open');
        alert('Tili poistettu onnistuneesti.');
      } else {
        alert(data.message || 'Tilin poisto epäonnistui.');
      }
    } catch (err) {
      alert('Virhe palvelinyhteydessä.');
    }
  };

  // JWT-tokenin purku
  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  return (
    <div className="navigation-wrapper">
      {/* Taustavideot */}
      <video
        id="dayToNight"
        className="background-video night-transition"
        ref={dayToNightVideoRef}
        preload="auto"
        muted
        playsInline
      >
        <source src={lightModeVideo} type="video/mp4" />
      </video>
      <video
        id="nightToDay"
        className="background-video day-transition"
        ref={nightToDayVideoRef}
        preload="auto"
        muted
        playsInline
      >
        <source src={darkModeVideo} type="video/mp4" />
      </video>

      {/* Overlay ja login-modaali */}
      {isLoginOpen && (
        <>
          <div
            className="modal-overlay"
            onClick={closeLoginModal}
            onWheel={e => e.preventDefault()}
            onTouchMove={e => e.preventDefault()}
          ></div>
          <div className="modal" tabIndex={-1}>
            <button id="close-login-modal" onClick={closeLoginModal}>Close</button>
            <h2 style={{ fontSize: "4rem" }}>Login</h2>
            <p>I'm using MongoDB database to store data and Render cloud service to host the backend. Together they enable registration and login. If you register, you can login with your email and password.</p>
            <ul style={{ margin: '1em 0 1.5em 1.2em', fontSize: '1rem', lineHeight: 1.6 }}>
              <li>Passwords are stored securely using bcrypt hashing and never in plain text.</li>
              <li>All communication is encrypted via HTTPS.</li>
              <li>User data is never shared with third parties and is only used for authentication.</li>
              <li>Always use a strong password (at least 8 characters, upper and lower case letters, and numbers).</li>
            </ul>
            <p>Please enter your email and password to login. If you don't have an account, please create one.</p>
            <form id="login-form" onSubmit={handleLoginSubmit} autoComplete="off">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={loginForm.email} onChange={handleLoginChange} required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={loginForm.password} onChange={handleLoginChange} required />
              <button id="login-button" type="submit">Login</button>
              {loginError && <div style={{ color: '#ff4444', marginTop: 8 }}>{loginError}</div>}
              {loginSuccess && <div style={{ color: 'green', marginTop: 8 }}>{loginSuccess}</div>}
            </form>
            <h2>OR</h2>
            <p>Create account</p>
            <form id="register-form" onSubmit={handleRegisterSubmit} autoComplete="off">
              <label htmlFor="register-email">Email:</label>
              <input type="email" id="register-email" name="email" value={registerForm.email} onChange={handleRegisterChange} required />
              <label htmlFor="register-password">Password:</label>
              <input type="password" id="register-password" name="password" value={registerForm.password} onChange={handleRegisterChange} required />
              <br />
              <button id="register-button" type="submit">Register</button>
              {registerError && <div style={{ color: '#ff4444', marginTop: 8 }}>{registerError}</div>}
              {registerSuccess && <div style={{ color: 'green', marginTop: 8 }}>{registerSuccess}</div>}
            </form>
          </div>
        </>
      )}
      {/* Overlay ja CV-modaali */}
      {isCvOpen && (
        <>
          <div
            className="modal-overlay"
            onClick={closeCvModal}
            onWheel={e => e.preventDefault()}
            onTouchMove={e => e.preventDefault()}
          ></div>
          <div className="modal cv-modal" tabIndex={-1}>
            <div className="section">
              <h2>Work Experience</h2>
              <hr />
              <h3>Kesko Oyj</h3>
              <p><em>Logistics Specialist</em><br />2010 – Present</p>
              <ul>
                <li>Managed and optimized logistics operations using SAP ERP</li>
                <li>Participated in development projects to improve operational efficiency</li>
                <li>Collaborated with cross-functional teams to enhance workflow processes</li>
                <li>Gained deep insight into the entire logistics chain and risk management</li>
                <li>Developed strong problem-solving, patience, and analytical thinking skills</li>
              </ul>
            </div>
            <div className="section">
              <h2>Education</h2>
              <hr />
              <h3>Taitotalo – Software Development</h3>
              <p>2023 – Present</p>
              <ul>
                <li>Studying full-stack web development with a focus on JavaScript, React, and Node.js</li>
                <li>Working on a team project to develop a solar system website using HTML, CSS, and JavaScript</li>
                <li>Learning database management and dynamic web applications</li>
              </ul>
            </div>
            <div className="section">
              <h2>Projects</h2>
              <hr />
              <h3>Solar System Website (Team Project)</h3>
              <ul>
                <li>Developed an interactive educational website about the solar system</li>
                <li>Contributed to testing, documentation, and teamwork using Scrum methodology</li>
                <li>Designed with a dark theme for readability and accessibility</li>
              </ul>
              <h3>Portfolio Website (Ongoing Development)</h3>
              <ul>
                <li>Creating a personal portfolio site to showcase coding projects and skills</li>
                <li>Implementing JavaScript features to enhance interactivity</li>
              </ul>
            </div>
            <div className="section">
              <h2>Publications</h2>
              <hr />
              <h3><em>Eerik Taffelsson: suvun taakka</em></h3>
              <p>Author: Johannes K. Metsäniemi<br />Publisher: Marketiimi, 2017<br />ISBN: 978-952-7247-00-6</p>
              <p>A historical novel exploring the memoirs of one of Finland's most renowned figures and the events that led him to a tragic act.</p>
            </div>
            <div className="section">
              <h2>Other Experience</h2>
              <hr />
              <h3>Novelist / Writer</h3>
              <ul>
                <li>Passionate about historical novels and storytelling</li>
                <li>Strong writing, research, and creative skills</li>
                <li>Experience in hosting events and public speaking</li>
              </ul>
            </div>
            <div className="section">
              <h2>Hobbies & Interests</h2>
              <hr />
              <ul>
                <li>Writing historical novels</li>
                <li>Building wooden furniture</li>
                <li>Running and outdoor activities</li>
                <li>Digital art and design</li>
              </ul>
            </div>
            <div className="section">
              <h2>Languages</h2>
              <hr />
              <ul>
                <li>Finnish (Native)</li>
                <li>English (Fluent)</li>
              </ul>
            </div>
            <div className="section">
              <h2>References</h2>
              <hr />
              <p>Available upon request. LOL.</p>
            </div>
            <button onClick={closeCvModal}>Sulje</button>
          </div>
        </>
      )}
      {/* Overlay ja käyttäjän oma modaali */}
      {isUserModalOpen && (
        <>
          <div
            className="modal-overlay"
            onClick={closeUserModal}
            onWheel={e => e.preventDefault()}
            onTouchMove={e => e.preventDefault()}
          ></div>
          <div className="modal" tabIndex={-1}>
            <button id="close-user-modal" onClick={closeUserModal}>Sulje</button>
            <h2 style={{ fontSize: "3rem" }}>Omat sivut</h2>
            <div className="user-content">
              <h3>Tervetuloa!</h3>
              <div className="user-info">
                <p>Rekisteröity sähköposti: <span id="user-email">{user?.email}</span></p>
              </div>
              <button id="logout-btn" onClick={handleLogout}>Kirjaudu ulos</button>
              <br />
              <p>Voit myös poistaa tilisi.</p>
              <button id="delete-account-btn" onClick={openDeleteConfirm}>Poista tili</button>
              {/* Tilin poiston varmistusmodaali */}
              {isDeleteConfirmOpen && (
                <>
                  <div className="modal-overlay"
                    onClick={closeDeleteConfirm}
                    onWheel={e => e.preventDefault()}
                    onTouchMove={e => e.preventDefault()}
                  ></div>
                  <div className="modal" tabIndex={-1} style={{ maxWidth: 400 }}>
                    <h2>Vahvista tilin poisto</h2>
                    <p>Haluatko varmasti poistaa tilisi? Tätä toimintoa ei voi perua.</p>
                    <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                      <button onClick={handleDeleteAccount} style={{ background: '#ff4444', color: '#fff' }}>Kyllä, poista tili</button>
                      <button onClick={closeDeleteConfirm}>Peruuta</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* Off-screen-valikko */}
      <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`} ref={offScreenMenuRef}>
        <ul>
          <img src={GeneratedImage} alt="Generated Image" /> {/* Korjattu src */}
          <li>
            {user ? (
              <button id="open-user-modal" onClick={openUserModal}>
                MY PAGE
              </button>
            ) : (
              <button id="open-login-modal" onClick={openLoginModal}>
                LOGIN
              </button>
            )}
          </li>
          <li>
            <a href="#">FRONT PAGE</a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                if (onProjectsClick) onProjectsClick();
                setIsMenuOpen(false); // sulje valikko
              }}>
              PROJECTS
            </button>
          </li>
          <li>
            <button id="open-modal" onClick={openCvModal}>
              CV
            </button>
          </li>
          <li>
            <a href="#CONTACT">CONTACT</a>
          </li>
        </ul>
      </div>

      {/* Navigaatio */}
      <nav>
        <button id="theme-switch" onClick={toggleTheme}>
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
    </div>
  );
}

export default Navigation;