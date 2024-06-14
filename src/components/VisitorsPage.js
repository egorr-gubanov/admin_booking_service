// VisitorsPage.js
import React from 'react';
import './VisitorsPage.css';

const visitorsData = [
    { id: 1, title: 'Выставка «У Лукоморья дуб зелёный…»', visitors: 48 },
    { id: 2, title: '«Наполеон. Отвергнутый жених»', visitors: 13 },
    { id: 3, title: '«Трамвай моей души»', visitors: 59 },
    { id: 4, title: 'Выставка «От глиняной таблички к печатной..»', visitors: 123 },
    { id: 5, title: 'Экскурсия «Казалось мир мне будет мал»', visitors: 43 },
    { id: 6, title: 'Программа «Кружево и кружевницы»', visitors: 54 },
    { id: 7, title: 'Музейное занятие «Секрет книги»', visitors: 62 },
    { id: 8, title: 'Музейное занятие «Ароматическое саше»', visitors: 98 },
];

const VisitorsPage = () => {
    return (
        <div className="visitors-page">
            <h1>МЕРОПРИЯТИЯ</h1>
            <h2>Посетители</h2>
            <div className="visitors-grid">
                {visitorsData.map(event => (
                    <div key={event.id} className="visitor-card">
                        <h3>{event.title}</h3>
                        <input type="text" value={`Посетителей: ${event.visitors}`} readOnly />
                        <button>Изменить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisitorsPage;