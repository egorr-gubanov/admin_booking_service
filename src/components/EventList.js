import React, { useState } from 'react';
import EventItem from './EventItem';

const EventList = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Выставка «У Лукоморья дуб зелёный...»', dateRange: '21 марта 2024 - 21 апреля 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 2, title: 'Наполеон. Отвергнутый жених', dateRange: '2 мая 2024 - 31 августа 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 3, title: 'Трамвай моей души', dateRange: '1 марта 2024 - 31 августа 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 4, title: 'Выставка «От глиняной таблички к печатной..»', dateRange: '6 апреля 2024 - 1 сентября 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 5, title: 'Экскурсия «Казалось мир мне будет мал»', dateRange: '1 марта 2024 - 1 июля 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 6, title: 'Программа «Кружево и кружевницы»', dateRange: '10 мая 2024 - 30 августа 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 7, title: 'Музейное занятие «Секрет книги»', dateRange: '1 марта 2024 - 31 августа 2024', times: ['9:00', '10:00', '11:00'] },
        { id: 8, title: 'Музейное занятие «Ароматическое саше»', dateRange: '2 июня 2024 - 21 июля 2024', times: ['9:00', '10:00', '11:00'] },
    ]);

    return (
        <div className="event-list">
            {events.map(event => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;