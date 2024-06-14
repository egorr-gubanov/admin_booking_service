import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import VisitorsPage from './components/VisitorsPage'; // Импортируем компонент страницы "Посетители"
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <aside className="sidebar">
                    <div className="logo">Логотип</div>
                    <nav>
                        <ul>
                            <li><a href="/">Мероприятия</a></li>
                            <li><a href="/create-event">Создать мероприятие</a></li>
                            <li><a href="/visitors">Посетители</a></li> {/* Добавляем кнопку "Посетители" */}
                        </ul>
                    </nav>
                </aside>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/create-event" element={<CreateEvent />} />
                        <Route path="/visitors" element={<VisitorsPage />} /> {/* Добавляем маршрут для страницы "Посетители" */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;