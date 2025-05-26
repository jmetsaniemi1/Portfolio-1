import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import lightModeVideo from "./assets/Images/Videos/lightmode.mp4";
import darkModeVideo from "./assets/Images/Videos/darkmode.mp4";
import GeneratedImage from "./assets/Images/Generated Image.png"; 
import AdminPage from "./adminPage.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

function ProfileModal({ user, onClose, onAvatarUpdated }) {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(user?.avatarUrl ? user.avatarUrl : "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!avatar) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const token = user.token;
      const res = await fetch("https://portfolio-zvkt.onrender.com/api/profile/avatar", {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");
      setPreview(data.avatarUrl);
      setAvatar(null);
      if (onAvatarUpdated) onAvatarUpdated(data.avatarUrl);
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal" tabIndex={-1} style={{ maxWidth: 400 }}>
        <button id="close-profile-modal" onClick={onClose}>Close</button>
        <h2 style={{ fontSize: "2rem" }}>Profile</h2>
        <div className="user-content">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <img
              src={preview ? preview : "/assets/Images/placeholder-avatar.png"}
              alt="Avatar"
              style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "2px solid #ffad06", marginBottom: 12 }}
              onError={e => e.target.src = "/assets/Images/placeholder-avatar.png"}
            />
            <form onSubmit={handleUpload} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button type="submit" disabled={uploading || !avatar} style={{ marginTop: 8 }}>
                {uploading ? "Uploading..." : "Upload Avatar"}
              </button>
            </form>
            {error && <div style={{ color: "#ff4444" }}>{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

function CalculatorModal({ onClose }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (val) => {
    setInput((prev) => prev + val);
  };
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal calculator-modal" tabIndex={-1}>
        <button id="close-calc-modal" className="modal-close-btn" onClick={onClose}>Close</button>
        <h2 className="modal-title">Calculator</h2>
        <div className="calc-content">
          <input
            type="text"
            value={input}
            readOnly
            className="calc-input"
          />
          <div className="calc-result">
            {result !== "" && (result === "Error" ? "Error" : `= ${result}`)}
          </div>
          <div className="calc-buttons">
            {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","C","+"].map((val) =>
              val === "C" ? (
                <button key={val} onClick={handleClear} className="calc-btn calc-btn-clear">C</button>
              ) : (
                <button key={val} onClick={() => handleButtonClick(val)} className="calc-btn">{val}</button>
              )
            )}
            <button className="calc-btn calc-btn-equals" onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

function WatchModal({ onClose }) {
  const [tab, setTab] = useState("clock");
  // Clock
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (tab !== "clock") return;
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [tab]);
  // Timer
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  const [timerCentiseconds, setTimerCentiseconds] = useState("");
  useEffect(() => {
    if (tab !== "timer" || !timerRunning) return;
    if (timer <= 0) { setTimerRunning(false); return; }
    const interval = setInterval(() => setTimer((t) => t - 1), 10); // 10ms välein
    return () => clearInterval(interval);
  }, [tab, timerRunning, timer]);
  // Stopwatch: sadasosat
  const [sw, setSw] = useState(0); // sadasosasekunteina (0.01s)
  const [swRunning, setSwRunning] = useState(false);
  useEffect(() => {
    if (tab !== "stopwatch" || !swRunning) return;
    const interval = setInterval(() => setSw((t) => t + 1), 10); // 10ms välein
    return () => clearInterval(interval);
  }, [tab, swRunning]);
  // Helpers
  const format = (s) => {
    const h = Math.floor(s/360000).toString().padStart(2,"0");
    const m = Math.floor((s/6000)%60).toString().padStart(2,"0");
    const ss = Math.floor((s/100)%60).toString().padStart(2,"0");
    const cs = (s%100).toString().padStart(2,"0");
    return `${h}:${m}:${ss}.${cs}`;
  };
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal calculator-modal" tabIndex={-1}>
        <button id="close-watch-modal" className="modal-close-btn" onClick={onClose}>Close</button>
        <h2 className="modal-title">WATCH</h2>
        <div className="watch-tabs">
          <button onClick={() => setTab("clock")} className={tab==="clock"?"watch-tab active":"watch-tab"}>Current Time</button>
          <button onClick={() => setTab("timer")} className={tab==="timer"?"watch-tab active":"watch-tab"}>Timer</button>
          <button onClick={() => setTab("stopwatch")} className={tab==="stopwatch"?"watch-tab active":"watch-tab"}>Stopwatch</button>
        </div>
        <div className="watch-content">
          {tab === "clock" && (
            <>
              <div className="watch-time">{time.toLocaleTimeString()}</div>
              <div className="watch-desc-main">Current time is updated every second using setInterval and React state. The component re-renders on every tick.</div>
              <div className="watch-desc-tech">Implementation: useEffect sets up a 1s interval, which updates a Date state. UI updates automatically when state changes.</div>
            </>
          )}
          {tab === "timer" && (
            <>
              <div className="watch-time">{format(timer)}</div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 8 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.8rem' }}>HOUR</label>
                  <input type="number" min="0" max="99" value={timerHours} placeholder="" onChange={e => {
                    const val = e.target.value;
                    if (val === "") setTimerHours("");
                    else setTimerHours(Math.max(0, Math.min(99, Number(val))));
                  }} className="watch-timer-input" style={{ width: 48 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.8rem' }}>MIN</label>
                  <input type="number" min="0" max="59" value={timerMinutes} placeholder="" onChange={e => {
                    const val = e.target.value;
                    if (val === "") setTimerMinutes("");
                    else setTimerMinutes(Math.max(0, Math.min(59, Number(val))));
                  }} className="watch-timer-input" style={{ width: 48 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.8rem' }}>SEC</label>
                  <input type="number" min="0" max="59" value={timerSeconds} placeholder="" onChange={e => {
                    const val = e.target.value;
                    if (val === "") setTimerSeconds("");
                    else setTimerSeconds(Math.max(0, Math.min(59, Number(val))));
                  }} className="watch-timer-input" style={{ width: 48 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.8rem' }}>CS</label>
                  <input type="number" min="0" max="99" value={timerCentiseconds} placeholder="" onChange={e => {
                    const val = e.target.value;
                    if (val === "") setTimerCentiseconds("");
                    else setTimerCentiseconds(Math.max(0, Math.min(99, Number(val))));
                  }} className="watch-timer-input" style={{ width: 48 }} />
                </div>
              </div>
              <div className="watch-timer-buttons">
                <button onClick={() => {
                  const h = timerHours === "" ? 0 : Number(timerHours);
                  const m = timerMinutes === "" ? 0 : Number(timerMinutes);
                  const s = timerSeconds === "" ? 0 : Number(timerSeconds);
                  const cs = timerCentiseconds === "" ? 0 : Number(timerCentiseconds);
                  const total = h*360000 + m*6000 + s*100 + cs;
                  setTimer(total);
                  setTimerRunning(false);
                }}>Set</button>
                <button onClick={() => setTimerRunning(true)} disabled={timer<=0}>Start</button>
                <button onClick={() => setTimerRunning(false)}>Pause</button>
                <button onClick={() => { setTimer(0); setTimerRunning(false); }}>Reset</button>
              </div>
              <div className="watch-desc-main">Timer counts down every 0.01 seconds using setInterval and React state. When timer reaches zero, it stops automatically.</div>
              <div className="watch-desc-tech">Implementation: useEffect sets up a 10ms interval when running. State is decremented, UI updates on state change. Time is formatted as hh:mm:ss.cs.</div>
            </>
          )}
          {tab === "stopwatch" && (
            <>
              <div className="watch-time">{format(sw)}</div>
              <div className="watch-timer-buttons">
                <button onClick={() => setSwRunning(true)}>Start</button>
                <button onClick={() => setSwRunning(false)}>Stop</button>
                <button onClick={() => { setSw(0); setSwRunning(false); }}>Reset</button>
              </div>
              <div className="watch-desc-main">Stopwatch increments every 0.01 seconds using setInterval and React state. You can start, stop and reset the counter.</div>
              <div className="watch-desc-tech">Implementation: useEffect sets up a 10ms interval when running. State is incremented, UI updates on state change. Time is formatted as mm:ss.ss.</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function ToDoModal({ onClose }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('todo-tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input.trim(), done: false, id: Date.now() }]);
    setInput("");
  };
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal calculator-modal" tabIndex={-1}>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
        <h2 className="modal-title">TO-DO</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            style={{ flex: 1, borderRadius: 8, border: '1px solid #ffad06', padding: '0.4em 1em', fontSize: '1.1rem' }}
          />
          <button onClick={addTask} style={{ borderRadius: 8, background: '#ffad06', color: '#222', fontWeight: 'bold', border: 'none', padding: '0.4em 1.2em', fontSize: '1.1rem' }}>Add</button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: 180, overflowY: 'auto' }}>
          {tasks.length === 0 && <li style={{ color: '#888', textAlign: 'center', marginTop: 16 }}>No tasks yet.</li>}
          {tasks.map(task => (
            <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
              <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#888' : '#fff', flex: 1 }}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)} style={{ background: '#ff4444', color: '#fff', border: 'none', borderRadius: 6, padding: '0.2em 0.8em', fontSize: '1rem', cursor: 'pointer' }}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="watch-desc-main" style={{ marginTop: 18 }}>This is a classic to-do app implemented as a modal. You can add, mark as done, and delete tasks. All tasks are saved to your browser's localStorage.</div>
        <div className="watch-desc-tech">Technical: This modal demonstrates basic CRUD operations (Create, Read, Update, Delete) using React state and localStorage for persistence. No backend is required. The component uses useState and useEffect hooks for state and storage management.</div>
      </div>
    </>
  );
}

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
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
  const [isToDoModalOpen, setIsToDoModalOpen] = useState(false);
  const loginModalRef = useRef(null);
  const cvModalRef = useRef(null);
  const offScreenMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Navigation user:", user); // Debug: tulosta user-tila

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

  // Päivitä user-tila jos localStorage muuttuu (esim. toisessa välilehdessä)
  useEffect(() => {
    const onStorage = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
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
      document.body.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      // Vaihdetaan tummasta valoisaan
      console.log("Switching to light mode");
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
      if (decoded && decoded.isAdmin) {
        userData.isAdmin = true;
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

  // Päivitä user-objektiin avatarUrl kun profiili päivitetään
  const handleAvatarUpdated = (avatarUrl) => {
    setUser((prev) => prev ? { ...prev, avatarUrl } : prev);
    const saved = localStorage.getItem('user');
    if (saved) {
      const userObj = JSON.parse(saved);
      userObj.avatarUrl = avatarUrl;
      localStorage.setItem('user', JSON.stringify(userObj));
    }
  };

  return (
    <div className="navigation-wrapper">
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
            <button onClick={closeCvModal}>Close</button>
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
            <button id="close-user-modal" onClick={closeUserModal}>Close</button>
            <h2 style={{ fontSize: "3rem" }}>My Page</h2>
            <div className="user-content">
              <h3>Welcome!</h3>
              <div className="user-info">
                <p>Registered email: <span id="user-email">{user?.email}</span></p>
              </div>
              {/* Avatar-kuva ja profiilin muokkaus */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <img
                  src={user?.avatarUrl ? user.avatarUrl : "/assets/Images/placeholder-avatar.png"}
                  alt="Avatar"
                  style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", border: "2px solid #ffad06" }}
                  onError={e => e.target.src = "/assets/Images/placeholder-avatar.png"}
                />
                <button onClick={() => setIsProfileModalOpen(true)} style={{ marginTop: 8 }}>Edit profile</button>
              </div>
              <button id="logout-btn" onClick={handleLogout}>Logout</button>
              <br />
              <p>You can also delete your account.</p>
              <button id="delete-account-btn" onClick={openDeleteConfirm}>Delete account</button>
              {/* Tilin poiston varmistusmodaali */}
              {isDeleteConfirmOpen && (
                <>
                  <div className="modal-overlay"
                    onClick={closeDeleteConfirm}
                    onWheel={e => e.preventDefault()}
                    onTouchMove={e => e.preventDefault()}
                  ></div>
                  <div className="modal" tabIndex={-1} style={{ maxWidth: 400 }}>
                    <h2>Confirm account deletion</h2>
                    <p>Are you sure you want to delete your account? This action cannot be undone.</p>
                    <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                      <button onClick={handleDeleteAccount} style={{ background: '#ff4444', color: '#fff' }}>Yes, delete account</button>
                      <button onClick={closeDeleteConfirm}>Cancel</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Profiilimodaali */}
          {isProfileModalOpen && (
            <ProfileModal user={user} onClose={() => setIsProfileModalOpen(false)} onAvatarUpdated={handleAvatarUpdated} />
          )}
        </>
      )}
      {/* Admin-modaali: */}
      {isAdminModalOpen && (
        <>
          <div
            className="modal-overlay"
            onClick={() => setIsAdminModalOpen(false)}
            onWheel={e => e.preventDefault()}
            onTouchMove={e => e.preventDefault()}
          ></div>
          <div className="modal" tabIndex={-1}>
            <button id="close-admin-modal" onClick={() => setIsAdminModalOpen(false)}>Close</button>
            <AdminPage />
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
            <button
              id="front-page-btn"
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
              FRONT PAGE
            </button>
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
          <li>
            <button id="open-calc-modal" onClick={() => setIsCalcModalOpen(true)}>
              CALCULATOR
            </button>
          </li>
          <li>
            <button id="open-watch-modal" onClick={() => setIsWatchModalOpen(true)}>
              WATCH
            </button>
          </li>
          <li>
            <button id="open-todo-modal" onClick={() => setIsToDoModalOpen(true)}>
              TO-DO
            </button>
          </li>
          <li>
            <button id="open-blog" onClick={() => { navigate('/blog'); }}>
              BLOG
            </button>
          </li>
          {/* Admin-nappi vain adminille */}
          {user && user.isAdmin && (
            <li>
              <button id="open-admin-modal" onClick={() => setIsAdminModalOpen(true)}>
                ADMIN
              </button>
            </li>
          )}
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

      {/* Calculator-modaali */}
      {isCalcModalOpen && (
        <CalculatorModal onClose={() => setIsCalcModalOpen(false)} />
      )}
      {/* Watch-modaali */}
      {isWatchModalOpen && (
        <WatchModal onClose={() => setIsWatchModalOpen(false)} />
      )}
      {/* To-Do-modaali */}
      {isToDoModalOpen && (
        <ToDoModal onClose={() => setIsToDoModalOpen(false)} />
      )}
    </div>
  );
}

export default Navigation;