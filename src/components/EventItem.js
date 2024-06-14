import React, { useState } from 'react';
import EventSettings from './EventSettings';

const EventItem = ({ event }) => {
    const [showSettings, setShowSettings] = useState(false);

    const handleToggleSettings = () => {
        setShowSettings(!showSettings);
    };

    return (
        <div className="event-item">
            <h2>{event.title}</h2>
            <p>{event.dateRange}</p>
            <div className="event-times">
                {event.times.map(time => (
                    <span key={time}>{time}</span>
                ))}
            </div>
            <button className="edit-button" onClick={handleToggleSettings}>Изменить</button>
            {showSettings && <EventSettings event={event} onClose={handleToggleSettings} />}
        </div>
    );
};

export default EventItem;