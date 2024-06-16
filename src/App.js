import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import VisitorsPage from './components/VisitorsPage';
import './App.css';
import logo from './Assets/logo.png';
import icon1 from './Assets/1.svg';
import icon2 from './Assets/2.svg';
import icon3 from './Assets/3.svg';

function App() {
    return (
        <Router>
            <div className="app">
                <aside className="sidebar">
                    <div className="logo">
                        <img src={logo} alt="Логотип" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src={icon1} alt="Иконка 1" />
                                </a>
                            </li>
                            <li>
                                <a href="/visitors">
                                    <img src={icon3} alt="Иконка 3" />
                                </a>
                            </li>
                            <li>
                                <a href="/create-event">
                                    <img src={icon2} alt="Иконка 2" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/create-event" element={<CreateEvent />} />
                        <Route path="/visitors" element={<VisitorsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;